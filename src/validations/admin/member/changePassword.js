import { Joi, celebrate } from "celebrate";

export const adminMemberChangePasswordValidation = celebrate({
  body: Joi.object({
    password: Joi.string().required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .label("password and confirmPassword not matched")
      .required(),
  }),
});
