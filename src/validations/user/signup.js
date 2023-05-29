import { Joi, celebrate } from "celebrate";

export const userSignupValidate = celebrate({
  body: Joi.object({
    user_name: Joi.string().required(),
    user_email: Joi.string().required(),
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
    role: Joi.string().required(),
    consent_personal_information: Joi.string().optional(),
    accept_terms_condition: Joi.string().optional(),
    consent_third_party_information: Joi.string().optional(),
    consent_marketing: Joi.string().optional(),
    company_name: Joi.string().required(),
    postal_code: Joi.string().required(),
    address_line1: Joi.string().required(),
    address_line2: Joi.string().required(),
    sectors: Joi.string().required(),
    corp_code: Joi.string().optional(),
    from: Joi.string().allow(null).optional(),
  }),
});
