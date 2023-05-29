import { Joi, celebrate } from "celebrate";

export const searchQuoteValidation = celebrate({
  body: Joi.object({
    name: Joi.string().empty(""),
    requestStart: Joi.date().empty(),
    requestEnd: Joi.date().empty(),
  }),
});
