import Joi from "joi";

export const newPresentValidator = Joi.object({
    name: Joi.string().trim().min(2).max(40).required(),
    description: Joi.string().trim().min(10).max(100).required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).required()

})

export const updatePresentValidator = newPresentValidator