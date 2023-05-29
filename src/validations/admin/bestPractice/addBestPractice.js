import { Joi, celebrate } from "celebrate";

export const adminaddBestPracticeValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    company_id: Joi.number().min(1).required(),
    description: Joi.string().allow(null, "").required(),
    sectors: Joi.string().optional(),
    solution: Joi.string().optional(),
    disclosure: Joi.string().required(),
  }),
});
