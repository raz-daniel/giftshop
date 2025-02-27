import Joi from "joi";

export const newMarketTypesValidator = Joi.object({
    category: Joi.string().trim().min(2).max(40).required()
})

export const updateMarketTypesValidator = newMarketTypesValidator