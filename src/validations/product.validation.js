const Joi = require('joi');

// TODO: name Json schema validation
const getProducts = {
	query: Joi.object().keys({
		name: Joi.string().valid(
			Joi.object().keys({
				like: Joi.string(),
			})
		),
		itemId: Joi.number().integer(),
		locale: Joi.string(),
		click: Joi.number().integer(),
		purchase: Joi.number().integer(),
		sortBy: Joi.string(),
		limit: Joi.number().min(1),
		page: Joi.number().min(1),
	}),
};

module.exports = {
	getProducts,
};
