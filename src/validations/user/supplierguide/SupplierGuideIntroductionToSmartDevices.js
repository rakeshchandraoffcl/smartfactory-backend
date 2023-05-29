import { Joi, celebrate } from "celebrate";

export const supplierGuideIntroductionToSmartDevicesValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    device_category: Joi.string().optional(),
    solution: Joi.string().optional(),
    description: Joi.string().required(),
    registration_status: Joi.string().required(),
  }),
});
