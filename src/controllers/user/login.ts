import bcrypt from 'bcryptjs';
import { ControllerArgs } from "../../types";
import { User } from '../../models';
import { UnAuthorizedError } from "../../errors";
import { generateToken } from '../../utils';
import { config } from '../../configs';


export const login = async ({ input }: ControllerArgs) => {
    const { email, password } = input;

    let user = (await User.scope('withPassword')
        .findOne({ where: { email } }))?.toJSON();

    if (!user || !bcrypt.compareSync(password, user.password))
        throw new UnAuthorizedError('Incorrect email or password');
    
    const accessToken =
        generateToken({ id: user.id }, config.jwtAccessTokenSecret);
      
    const { password: userPassword, ...serializedUser } = user;
    
    return {
        message: 'you are logged in',
        token : accessToken,
        data : serializedUser
    }
};