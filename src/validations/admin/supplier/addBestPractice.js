import { Joi, celebrate } from "celebrate";

export const adminaddBestPracticeValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    sectors: Joi.string().optional(),
    solution: Joi.string().optional(),
    disclosure: Joi.string().optional(),
  }),
});
