import { Joi, celebrate } from "celebrate";

export const userValidation = celebrate({
  body: Joi.object({
    userName: Joi.string().required(),
    userEmail: Joi.string().email().required(),
    password: Joi.string().min(8).max(15).required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .label("password and confirm_password not matched")
      .required(),
    consentPersonalInformation: Joi.string().valid("Y", "N").required(),
    acceptTermsCondition: Joi.string().valid("Y", "N").required(),
    consentThirdPartyInformation: Joi.string().valid("Y", "N").required(),
    consentMarketing: Joi.string().valid("Y", "N").required(),
    phoneNumber: Joi.string().required(),
    companyId: Joi.alternatives()
      .try(Joi.string().valid(null), Joi.number().valid(null))
      .optional(),
    userStatus: Joi.string().valid("MMBRS_STTS_01", "MMBRS_STTS_02", "MMBRS_STTS_03").required(),
    userType: Joi.string()
      .valid("USER_TYPE_01", "USER_TYPE_02", "USER_TYPE_03", "USER_TYPE_04")
      .required(),
  }),
});
