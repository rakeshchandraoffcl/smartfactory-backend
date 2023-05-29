import { Joi, celebrate } from "celebrate";

export const adminaddTextValidation = celebrate({
  body: Joi.object({
    sender_contact: Joi.string().required(),
    when_send_message: Joi.string().required(),
    message_title: Joi.string().required(),
    message_contents: Joi.string().optional(),
    usage_status: Joi.string().valid("Y", "N").required(),
    admins: Joi.array().items(Joi.number()),
  }),
});
