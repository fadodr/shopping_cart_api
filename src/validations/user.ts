import { Joi } from '../utils';

export const signupValSchema = {
    inputSchema: Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30).required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    }),
}

export const forgotPwdSchema = {
    inputSchema: Joi.object().keys({
        email : Joi.string().email().required()
    })
}

export const resetPwdSchema = {
    inputSchema: Joi.object().keys({
        resetToken : Joi.string().length(8).required(),
        password: Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    })
}

export const changePwdSchema = {
    inputSchema: Joi.object().keys({
        oldPassword : Joi.string().required(),
        newPassword: Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    })
}