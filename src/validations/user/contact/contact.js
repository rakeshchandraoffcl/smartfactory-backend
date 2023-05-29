import { Joi, celebrate } from "celebrate";

export const userContactValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
});
