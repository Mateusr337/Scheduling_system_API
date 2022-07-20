import joi from 'joi';

const processSchema = joi.object({
  active: joi.boolean().required(),
  number: joi
    .string()
    .required()
    .pattern(/^[0-9]{5}[a-z, A-Z]{7}$/),
  state: joi
    .string()
    .required()
    .pattern(/^[A-Z]{2}$/),
  value: joi.number().integer().required(),
  initialDate: joi
    .string()
    .required()
    .pattern(/^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/),
  clientId: joi.number().integer().required(),
});

export default processSchema;
