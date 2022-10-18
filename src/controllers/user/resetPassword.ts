import { Op } from 'sequelize';
import { hashPassword } from '../../utils';
import { ForbiddenError } from '../../errors';
import { User } from '../../models';
import { ControllerArgs } from '../../types';

export const resetPassword = async ({ input } : ControllerArgs) => {
    const { resetToken, password } = input;

    const user = await User.findOne({
        where: {
            resetToken,
            resetTokenExpiresIn: {
                [Op.gte]: Date.now()
            }
        }
    });
    if (!user) throw new ForbiddenError('Invalid or Expired token');

    const hashPwd = await hashPassword(password);
    user.set({
        password: hashPwd,
        resetToken: null,
        resetTokenExpiresIn: null
    });
    await user.save();

    return {
        message: 'password have been reset successfully',
        data : user
    }
}