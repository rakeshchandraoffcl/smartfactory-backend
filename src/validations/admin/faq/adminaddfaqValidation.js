import { Joi, celebrate } from "celebrate";

export const adminaddfaqValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    disclosure: Joi.string().required(),
  }),
});
