import { Joi, celebrate } from "celebrate";

export const userGetDiagnosisReportResult = celebrate({
  body: Joi.object({
    user_id: Joi.number().allow(null).required(),
    details: Joi.array()
      .items({
        diagnosis_question_id: Joi.number().required(),
        diagnosis_option_id: Joi.number().required(),
      })
      .min(1)
      .required(),
  }),
});
