import { Joi, celebrate } from "celebrate";

export const adminReplyInquiryValidation = celebrate({
  body: Joi.object({
    answer: Joi.string().required(),
  }),
});
