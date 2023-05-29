import { Joi, celebrate } from "celebrate";

export const appvalCancelhQuoteValidation = celebrate({
  body: Joi.object({
    status_type: Joi.string().required(""),
    quote_approval_deadline_date: Joi.date(),
    send_notification: Joi.string(),
  }),
});
