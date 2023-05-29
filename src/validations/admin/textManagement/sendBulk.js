import { Joi, celebrate } from "celebrate";

export const adminSendBulkTextValidation = celebrate({
  body: Joi.object({
    variables: Joi.array().items({
      name: Joi.string().required(),
      type: Joi.string().valid("company_name", "receiver_name", "mannual_input").required(),
      value: Joi.string().optional(),
    }),
    input_type: Joi.string().valid("t_data", "e_data").required(),
    t_data: Joi.array().items(Joi.number()).min(1).optional(),
    e_data: Joi.array()
      .items({
        company_name: Joi.string().required(),
        receiver_name: Joi.string().required(),
        receiver_number: Joi.string().required(),
      })
      .min(1)
      .optional(),
  }),
});
