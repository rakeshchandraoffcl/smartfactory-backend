import { Joi, celebrate } from "celebrate";

export const adminUpdateBestPracticeValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    solution: Joi.string().required(),
    situation: Joi.string().required(),
    explanation: Joi.string().required(),
    sectors: Joi.string().required(),
    disclosure: Joi.string().required(),
  }),
});
