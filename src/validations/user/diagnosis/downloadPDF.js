import { Joi, celebrate } from "celebrate";

export const userDownloadDiagnosisReportResult = celebrate({
  body: Joi.object({
    user_id: Joi.number().allow(null).optional(),
    user_email: Joi.string().allow(null).optional(),
    result_id: Joi.string().allow(null).required(),
  }),
});
