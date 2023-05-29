import { celebrate, Joi } from "celebrate";
import {
  factory_scale,
  government_location,
  government_type,
  REGEXP,
  subsidy_standard,
} from "../../../utils/constants.js";

export const saveSubsidyValidation = celebrate({
  body: Joi.object().keys({
    businessYear: Joi.string().length(4).required(),
    subsidyType: Joi.string()
      .max(50)
      .valid(...Object.keys(government_type))
      .required(),
    region: Joi.string()
      .max(50)
      .valid(...Object.keys(government_location))
      .optional(),
    businessDivision: Joi.string()
      .max(50)
      .valid(...Object.keys(factory_scale))
      .required(),
    paymentStandard: Joi.string()
      .max(50)
      .valid(...Object.keys(subsidy_standard))
      .required(),
    paymentRatio: Joi.string().pattern(new RegExp(REGEXP.decimalPattern)),
    maximumSubsidy: Joi.number().integer().max(999999999).optional(),
    referenceURL: Joi.string().max(255).pattern(new RegExp(REGEXP.urlPattern)).allow(null, ""),
    supportDetails: Joi.string().max(1000).allow(null, ""),
  }),
});
