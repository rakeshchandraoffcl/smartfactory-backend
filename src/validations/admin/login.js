import { celebrate, Joi } from "celebrate";

export const adminLoginValidate = celebrate({
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
