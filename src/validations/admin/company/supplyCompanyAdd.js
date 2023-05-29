import { Joi, celebrate } from "celebrate";

export const supplyCompanyAddValidation = celebrate({
  body: Joi.object({
    company_name: Joi.string().required(),
    company_classification: Joi.string().required(),
    representative_name: Joi.string().optional(),
    inflow_classification: Joi.string().optional(),
    address_line1: Joi.string().optional(),
    industry: Joi.string().optional(),
    detailed_industry1: Joi.string().optional(),
    detailed_industry2: Joi.string().optional(),
    detailed_industry3: Joi.string().optional(),
    main_solution1: Joi.string().optional(),
    business_number: Joi.number().optional(),
    device_supply: Joi.string().optional(),
    main_application_industry1: Joi.string().optional(),
    main_application_industry2: Joi.string().optional(),
    main_application_industry3: Joi.string().optional(),
    main_activity_area1: Joi.string().optional(),
    main_activity_area2: Joi.string().optional(),
    main_activity_area3: Joi.string().optional(),
    additional_info: Joi.string().optional(),
  }),
});
