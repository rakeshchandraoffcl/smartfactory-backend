import { Joi, celebrate } from "celebrate";

export const mentorEnd = celebrate({
  body: Joi.object({
    type: Joi.string().required(),
  }),
});
