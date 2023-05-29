import { Joi, celebrate } from "celebrate";

export const addMentoringValidation = celebrate({
  body: Joi.object({
    mentoring_id: Joi.number().required(),
    mentoring_progress_date: Joi.date().required(),
    mentoring_progress_time: Joi.number().required(),
    mentoring_comment: Joi.string().optional(),
    send_notification: Joi.string().optional(),
  }),
});
