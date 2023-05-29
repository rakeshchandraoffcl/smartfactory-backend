import { Joi, celebrate } from "celebrate";

export const editMemberValidation = celebrate({
  body: Joi.object({
    user_name: Joi.string().required(),
    user_email: Joi.string().required(),
    // password: Joi.string().optional(),
    phone_number: Joi.number().optional(),
    consent_marketing: Joi.string().optional(),
    user_status: Joi.string().optional(),
  }),
});
