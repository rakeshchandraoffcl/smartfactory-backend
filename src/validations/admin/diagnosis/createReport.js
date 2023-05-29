import { Joi, celebrate } from "celebrate";

export const adminDignosisCreateReportValidation = celebrate({
  body: Joi.object({
    // report: Joi.number().min(1).allow(null).required(),
    title: Joi.string().required(),
    isCommon: Joi.string().required(),
    isSummary: Joi.string().required(),
    priority: Joi.number().min(1).required(),
    order: Joi.number().min(0).required(),
    content: Joi.string().required(),
    status: Joi.string().optional(),
    diagnosis: Joi.array()
      .items({
        questionId: Joi.number().min(1).required(),
        questionNumber: Joi.number().min(1).required(),
        options: Joi.array().items(Joi.number()).min(1).required(),
      })
      .required(),
  }),
});
