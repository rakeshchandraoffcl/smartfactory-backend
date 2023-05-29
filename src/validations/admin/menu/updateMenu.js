import { Joi, celebrate } from "celebrate";

export const adminUpdateMenuValidation = celebrate({
  body: Joi.object({
    user_type: Joi.string().required(),
    menu: Joi.string().required(),
    action_type: Joi.string().valid("add", "remove").required(),
  }),
});
