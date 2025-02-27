import Joi from "joi";

export const newPresentValidator = Joi.object({
    name: Joi.string().trim().min(2).max(40).required(),
    description: Joi.string().trim().min(10).max(100).required(),
    price: Joi.string().trim().min(1).required(),
    discount: Joi.string().trim().min(1).required()

})

export const updatePresentValidator = newPresentValidator