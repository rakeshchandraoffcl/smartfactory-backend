import { Joi, celebrate } from "celebrate";

export const addMemberValidation = celebrate({
  body: Joi.object({
    user_name: Joi.string().required(),
    user_email: Joi.string().required(),
    // password: Joi.string().required(),
    phone_number: Joi.number().required(),
    consent_marketing: Joi.string().required(),
    user_status: Joi.string().required(),
  }),
});
