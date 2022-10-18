import { NotFoundError } from '../../errors';
import { User } from '../../models';
import { ControllerArgs } from '../../types';
import { generateRandStr } from '../../utils';
import { computeExpiryDate } from '../../utils/computeDate';


export const forgotPassword = async ({ input }: ControllerArgs) => {
    const { email } = input;

    const user = await User.findOne({ where: { email } });
    if (!user) throw new NotFoundError("User does not exit");

    const resetToken = generateRandStr(8);
    user.set({
        resetToken,
        resetTokenExpiresIn: computeExpiryDate(900)
    });
    await user.save();

    //can decided to send out a mail out to the customer but i choose not to

    return {
        message: 'you can now reset your password with this token',
        tokenData: {
            token: resetToken,
            expiresIn : user.resetTokenExpiresIn!.toISOString()
        }
    }
}