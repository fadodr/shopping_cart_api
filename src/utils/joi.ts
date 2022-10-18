// @ts-nocheck

import Joi, { Schema } from 'joi';
import JoiObjectId from 'joi-objectid';
Joi.objectId = JoiObjectId(Joi);

const joiValidate = (schema : Schema, obj : any) => {
    const { error, value } = schema.validate(obj);
    if (error) throw error;
    return value;
}

export {
    Joi,
    joiValidate
}