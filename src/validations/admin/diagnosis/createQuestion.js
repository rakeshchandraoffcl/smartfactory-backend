import { Joi, celebrate } from "celebrate";

export const adminDignosisCreateQuestionValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    order: Joi.number().min(1).required(),
    type: Joi.string().required(),
    isMultiple: Joi.string().required(),
    status: Joi.string().optional(),
    options: Joi.array().items({
      title: Joi.string().required(),
      order: Joi.number().min(1).required(),
      explanation: Joi.string(),
      sector: Joi.string().optional(),
      currentLevel: Joi.string().optional(),
      targetLevel: Joi.string().optional(),
      improvement_area: Joi.string().optional(),
      status: Joi.string().optional().default("active"),
    }),
  }),
});
