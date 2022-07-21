import joi from 'joi';

const processSchema = joi.object({
  active: joi.boolean().required(),
  type: joi.string().required().valid('TRAB', 'CIVEL'),
  state: joi
    .string()
    .required()
    .pattern(/^[A-Z]{2}$/),
  value: joi.number().integer().required(),
  initialDate: joi
    .string()
    .required()
    .pattern(/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/),
  clientId: joi.number().integer().required(),
});

export default processSchema;
