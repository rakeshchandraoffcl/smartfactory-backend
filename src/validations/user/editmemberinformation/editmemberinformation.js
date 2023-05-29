import { Joi, celebrate } from "celebrate";

export const editmemberinformationValidation = celebrate({
  body: Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    phone_number: Joi.number().required(),
    user_id: Joi.number().required(),
    company_id: Joi.number().required(),
    company_name: Joi.string().required(),
    newpassword: Joi.string().empty(),
    confirmpassword: Joi.string().empty(),
    company_sector: Joi.string().required(),
  }),
});
