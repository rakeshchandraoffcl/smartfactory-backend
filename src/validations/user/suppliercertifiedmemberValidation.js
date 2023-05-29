import { Joi, celebrate } from "celebrate";

export const suppliercertifiedmemberValidation = celebrate({
  body: Joi.object({
    formData: Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().required(),
      representative_name: Joi.string().required(),
      business_number: Joi.string().required(),
      address_line1: Joi.string().required(),
      address_line2: Joi.string().optional(),
      corp_code: Joi.string().optional().allow(null),
      postal_code: Joi.string().allow(null, "").optional(),
      solutions: Joi.array()
        .max(3)
        .min(1)
        .items({
          code_type: Joi.string().required(),
          code_name: Joi.string().allow(null).required(),
          code_no: Joi.string().allow(null).required(),
          id: Joi.number().allow(null).optional(),
        }),
      industries: Joi.array()
        .max(3)
        .min(1)
        .items({
          code_type: Joi.string().required(),
          code_name: Joi.string().allow(null).required(),
          code_no: Joi.string().allow(null).required(),
          id: Joi.number().allow(null).optional(),
        }),
      areas: Joi.array()
        .max(3)
        .min(1)
        .items({
          code_type: Joi.string().required(),
          code_name: Joi.string().allow(null).required(),
          code_no: Joi.string().allow(null).required(),
          id: Joi.number().allow(null).optional(),
        }),
      additional_info: Joi.string().allow(null, ""),
      upload_company_introduction: Joi.alternatives().try(Joi.string(), Joi.object()).required(),
      upload_company_introduction_original_name: Joi.string().required(),
      email: Joi.string().required(),
      name: Joi.string().required(),
      phone_number: Joi.string().required(),
    }),
    file: Joi.alternatives().try(Joi.string(), Joi.object()).optional(),
  }),
});
