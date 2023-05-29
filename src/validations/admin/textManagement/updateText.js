import { Joi, celebrate } from "celebrate";

export const adminUpdateTextValidation = celebrate({
  body: Joi.object({
    sender_contact: Joi.string().optional(),
    when_send_message: Joi.string().optional(),
    message_title: Joi.string().optional(),
    message_contents: Joi.string().optional(),
    usage_status: Joi.string().valid("Y", "N").optional(),
    admins: Joi.array().items(Joi.number()).optional(),
    removeAdmins: Joi.array().items(Joi.number()).optional(),
  }),
});
