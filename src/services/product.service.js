const { Op } = require('sequelize');
const { getOffset } = require('../utils/query');
const config = require('../config/config.js');
const db = require('../db/models');

async function getProducts(req) {
	const { page: defaultPage, limit: defaultLimit } = config.pagination;
	const {
		page = defaultPage,
		limit = defaultLimit,
		name,
		itemId,
	} = req.query;

	const offset = getOffset(page, limit);
	const filters = {};
	if (name) {
		filters.name = { [Op.iLike]: `%${name}%` };
	}
	if (itemId) {
		filters.item_id = Number(itemId);
	}

	const products = await db.products.findAndCountAll({
		where: filters,
		order: [['name', 'ASC']],
		attributes: ['id', 'item_id', 'name', 'locale', 'click', 'purchase'],
		offset,
		limit,
		raw: true,
	});

	return products;
}

module.exports = {
	getProducts,
};
