import joi from "joi";

export const SchemaSingup = joi.object({


    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    passwordConfirm: joi.string().required()
})