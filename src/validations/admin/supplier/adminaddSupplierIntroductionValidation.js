import { Joi, celebrate } from "celebrate";

export const adminaddSupplierIntroductionValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    company_id: Joi.number().min(1).required(),
    disclosure: Joi.string().required(),
  }),
});
