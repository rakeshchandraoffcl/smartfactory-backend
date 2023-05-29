import { celebrate, Joi } from "celebrate";

export const adminUpdateMailValidation = celebrate({
  body: Joi.object({
    sender_email: Joi.string().optional(),
    when_send_mail: Joi.string().optional(),
    mail_title: Joi.string().optional(),
    mail_contents: Joi.string().optional(),
    usage_status: Joi.string().valid("Y", "N").optional(),
    admins: Joi.array().items(Joi.number()).optional(),
    removeAdmins: Joi.array().items(Joi.number()).optional(),
  }),
});
