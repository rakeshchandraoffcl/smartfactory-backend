import { Joi, celebrate } from "celebrate";

export const adminCreateMenuValidation = celebrate({
  body: Joi.object({
    user_type: Joi.string().required(),
    menu_title: Joi.string().optional(),
    menu: Joi.string().required(),
    action: Joi.string().required(),
  }),
});
