import { Joi, celebrate } from "celebrate";

export const userChangePasswordValidation = celebrate({
  body: Joi.object({
    newpassword: Joi.string().required(),
    confirmpassword: Joi.string()
      .valid(Joi.ref("newpassword"))
      .label("password and confirmPassword not matched")
      .required(),
  }),
});
