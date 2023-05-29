import { Joi, celebrate } from "celebrate";

export const userMentorAssignMentorValidation = celebrate({
  body: Joi.object({
    mentors: Joi.array().items(Joi.number()).min(1).required(),
  }),
});
