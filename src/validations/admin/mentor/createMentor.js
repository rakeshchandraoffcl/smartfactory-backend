import { Joi, celebrate } from "celebrate";

export const adminCreateMentor = celebrate({
  body: Joi.object({
    user_name: Joi.string().required(),
    user_email: Joi.string().required(),
    address: Joi.string().required(),
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
    is_curator: Joi.string().valid("yes", "no").required(),
    is_evaluator: Joi.string().valid("yes", "no").required(),
    is_coordinator: Joi.string().valid("yes", "no").required(),
    is_meister: Joi.string().valid("yes", "no").required(),
    specialization1: Joi.string().optional(),
    specialization2: Joi.string().optional(),
    specialization3: Joi.string().optional(),
    professional_industry1: Joi.string().optional(),
    professional_industry2: Joi.string().optional(),
    professional_industry3: Joi.string().optional(),
    user_status: Joi.string().required(),
  }),
});
