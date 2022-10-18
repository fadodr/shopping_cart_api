import bcrypt from 'bcryptjs';
import { UnAuthorizedError } from '../../errors';
import { hashPassword } from '../../utils';
import { ControllerArgs } from '../../types';


export const changePassword = async({ input, user }: ControllerArgs) => {
    const { oldPassword, newPassword } = input;
    
    const isPwdCorrect =
        await bcrypt.compare(oldPassword, user!.password)
    if (!isPwdCorrect)
        throw new UnAuthorizedError('Incorrect password');
    
    const hashPwd = await hashPassword(newPassword);
    
    user!.set({
        password: hashPwd
    });
    await user!.save();

    const { password: pwd, ...serializeUser } = user!;
    
    return {
        message: 'password updated successfully',
        data: serializeUser
    }
}