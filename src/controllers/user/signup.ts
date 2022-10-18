import bcrypt from 'bcryptjs';
import { DuplicateError } from '../../errors';
import { User } from '../../models';
import { ControllerArgs } from '../../types';

export const signup = async ({ input } : ControllerArgs) => {
    const { name, username, email, password } = input;

    const existEmail = await User.findOne({ where: { email } });
    if (existEmail) throw new DuplicateError('email already exist');
    
    const existUserName = await User.findOne({ where: { username } });
    if (existUserName) throw new DuplicateError('username already exist');

    const hashPwd = await bcrypt.hash(password, 15);
    const user = await User.create({
        name,
        username,
        email,
        password: hashPwd
    });

    return {
        code: 201,
        message: 'you have signed up succesfully',
        data: user
    };
}