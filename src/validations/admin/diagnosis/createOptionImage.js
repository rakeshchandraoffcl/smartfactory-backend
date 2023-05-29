import { Joi, celebrate } from "celebrate";

export const adminDignosisCreateOptionImageValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    order: Joi.number().min(1).required(),
    explanation: Joi.string().required(),
    sector: Joi.string().required(),
    currentLevel: Joi.string().required(),
    targetLevel: Joi.string().required(),
    improvement_area: Joi.string().required(),
    status: Joi.string().optional(),
  }),
});
