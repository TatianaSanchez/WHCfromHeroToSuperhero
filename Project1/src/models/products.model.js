const Joi = require("joi");

const productModel = {
  productBody: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    category: Joi.string().required(),
  }),
  productParams: Joi.object().keys({
    id: Joi.string().guid().required(),
  }),
};

module.exports = productModel;
