import { celebrate, Joi } from "celebrate";

export const adminaddMailValidation = celebrate({
  body: Joi.object({
    sender_email: Joi.string().required(),
    when_send_mail: Joi.string().required(),
    mail_title: Joi.string().required(),
    mail_contents: Joi.string().optional(),
    usage_status: Joi.string().valid("Y", "N").required(),
    admins: Joi.array().items(Joi.number()),
  }),
});
