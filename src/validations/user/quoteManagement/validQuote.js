import { celebrate, Joi } from "celebrate";

export const quoteAddValidation = celebrate({
  body: Joi.object({
    desired_delivery_date: Joi.string().required(),
    delivery_address1: Joi.string().required(),
    postal_code_delivery: Joi.string().required(),
    request_quotation: Joi.string().required(),
    det_data: Joi.string().required(),
    attachment: Joi.string().optional(),
  }),
});
