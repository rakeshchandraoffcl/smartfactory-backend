import { Joi, celebrate } from "celebrate";

export const adminDignosisCreateOptionsValidation = celebrate({
  body: Joi.object({
    options: Joi.array()
      .items({
        title: Joi.string().required(),
        order: Joi.number().min(1).required(),
        explanation: Joi.string().optional(),
        sector: Joi.string().required(),
        currentLevel: Joi.string().required(),
        targetLevel: Joi.string().required(),
        improvement_area: Joi.string().required(),
        status: Joi.string().optional().default("active"),
      })
      .min(1)
      .required(),
  }),
});
