import { Joi, celebrate } from "celebrate";

export const userMentorSignUpValidation = celebrate({
  body: Joi.object({
    user: Joi.object({
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
    mentor: Joi.object({
      companyName: Joi.string().valid("").required(),
      companyClassification: Joi.string()
        .valid("BSNS_CLSFC_01", "BSNS_CLSFC_02", "BSNS_CLSFC_03", "BSNS_CLSFC_04")
        .required(),
      industry: [Joi.string().optional(), Joi.allow(null)],
      inflowClassification: [Joi.string().optional(), Joi.allow(null)],
      representativeName: [Joi.string().optional(), Joi.allow(null)],
      managerId: Joi.string().valid(null).required(),
      businessNumber: Joi.alternatives()
        .try(Joi.string().allow(null), Joi.number().allow(null))
        .optional(),
      addressLine1: Joi.string().allow(null, "").optional(),
      addressLine2: Joi.string().allow(null, "").optional(),
      postalCode: Joi.string().allow(null, "").optional(),
      additionalInfo: [Joi.string().optional(), Joi.allow(null, "")],
      companyMemo: Joi.string().allow(null, "").optional(),
      companyAlias: Joi.string().allow(null).optional(),
      companyIntroduction: Joi.string().allow(null).optional(),
      uploadCompanyIntroduction: Joi.object().required(),
      uploadCompanyIntroductionOriginalName: Joi.string().required(),
      CIImageName: Joi.string().allow(null).optional(),
      CIImageOriginalName: Joi.string().allow(null).optional(),
      deviceSupply: Joi.string().valid("Y", "N").allow(null).optional(),
      certificationStatus: Joi.string()
        .valid("BSNS_STTS_01", "BSNS_STTS_02", "BSNS_STTS_03")
        .required(),
      certificationDate: Joi.date().valid(null).optional(),
      corpCode: Joi.string().valid(null).optional(),
      usageStatus: Joi.string().valid("Y", "N").required(),
    }),
    solutions: Joi.array()
      .min(1)
      .items(
        Joi.string().valid(
          "SLTN_01",
          "SLTN_02",
          "SLTN_03",
          "SLTN_04",
          "SLTN_05",
          "SLTN_06",
          "SLTN_07",
          "SLTN_08",
          "SLTN_09",
          "SLTN_10",
          "SLTN_11",
          "SLTN_12",
        ),
      ),
    industries: Joi.array()
      .min(1)
      .items(
        Joi.string().valid(
          "INDST_01",
          "INDST_02",
          "INDST_03",
          "INDST_04",
          "INDST_05",
          "INDST_06",
          "INDST_07",
          "INDST_08",
          "INDST_09",
          "INDST_10",
          "INDST_11",
          "INDST_12",
        ),
      ),
    mentorTypes: Joi.array()
      .min(1)
      .max(3)
      .items(Joi.string().valid("MNTR_TYPE_02", "MNTR_TYPE_03", "MNTR_TYPE_04")),
  }),
});
