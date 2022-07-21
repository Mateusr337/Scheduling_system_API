import joi from 'joi';

const clientSchema = joi.object({
  name: joi.string().required(),
  CNPJ: joi
    .string()
    .required()
    .pattern(/^[0-9]{11}$/),
  state: joi
    .string()
    .required()
    .pattern(/^[A-Z]{2}$/),
});

export default clientSchema;
