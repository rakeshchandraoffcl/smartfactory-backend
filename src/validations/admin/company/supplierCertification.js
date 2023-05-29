import { Joi, celebrate } from "celebrate";

export const adminSupplierCertificationValidation = celebrate({
  body: Joi.object({
    status: Joi.string().required(),
    note: Joi.string().optional().allow(""),
    send_notification: Joi.boolean().optional(),
  }),
});
