import { Joi, celebrate } from "celebrate";

export const adminDignosisUpdateReportValidation = celebrate({
  body: Joi.object({
    // report: Joi.number().min(1).allow(null).required(),
    title: Joi.string().optional(),
    isCommon: Joi.string().optional(),
    isSummary: Joi.string().optional(),
    priority: Joi.number().min(1).optional(),
    order: Joi.number().min(0).optional(),
    content: Joi.string().optional(),
    status: Joi.string().optional().default("active"),
    diagnosis: Joi.array()
      .items({
        questionId: Joi.number().min(1).required(),
        options: Joi.array().items(Joi.number()).min(1).required(),
        questionNumber: Joi.number().min(1).required(),
      })
      .optional(),
  }),
});
