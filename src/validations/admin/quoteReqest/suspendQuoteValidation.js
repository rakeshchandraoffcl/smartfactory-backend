import { Joi, celebrate } from "celebrate";

export const suspendQuoteValidation = celebrate({
  body: Joi.object({
    status_type: Joi.string().required(""),
    send_notification: Joi.string(),
    suspension_reason: Joi.string(),
  }),
});
