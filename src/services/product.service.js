const { Op } = require('sequelize');
const { getOffset } = require('../utils/query');
const config = require('../config/config.js');
const db = require('../db/models');

async function getProducts(req) {
	const { page: defaultPage, limit: defaultLimit } = config.pagination;
	const {
		name,
		itemId,
		locale,
		click,
		purchase,
		page,
		sortBy,
		limit,
	} = req.query;

	const itemIdFilters = {};
	const nameFilters = {};
	const localeFilters = {};
	const clickFilters = {};
	const purchaseFilters = {};
	const pageFilters = {
		page: page || defaultPage,
		size: limit || defaultLimit,
	};

	let sortCriteria = [];
	if (sortBy) {
		sortCriteria = sortBy.split(',').map((sortField) => {
			const [field, order] = sortField.split(':');
			return [field, order.toUpperCase()];
		});
	}

	if (click) {
		const clickJson = JSON.parse(click);
		clickFilters.click = {};
		if (clickJson.lt) clickFilters.click[Op.lt] = clickJson.lt;
		if (clickJson.gt) clickFilters.click[Op.gt] = clickJson.gt;
	}

	if (purchase) {
		const purchaseJson = JSON.parse(purchase);
		purchaseFilters.purchase = {};
		if (purchaseJson.lt) purchaseFilters.purchase[Op.lt] = purchaseJson.lt;
		if (purchaseJson.gt) purchaseFilters.purchase[Op.gt] = purchaseJson.gt;
	}

	if (itemId) {
		const itemIdJson = JSON.parse(itemId);
		itemIdFilters.item_id = {};
		if (itemIdJson.like)
			itemIdFilters.item_id = { [Op.like]: `%${itemIdJson.like}%` };
	}

	if (name) {
		const nameJson = JSON.parse(name);
		nameFilters.name = {};
		if (nameJson.like)
			nameFilters.name = { [Op.iLike]: `%${nameJson.like}%` };
	}

	if (locale) {
		const localeJson = JSON.parse(locale);
		localeFilters.locale = {};
		if (localeJson.like)
			localeFilters.locale = { [Op.iLike]: `%${localeJson.like}%` };
	}

	const offset = getOffset(pageFilters.page, pageFilters.size);
	const products = await db.products.findAndCountAll({
		where: {
			...nameFilters,
			...localeFilters,
			...clickFilters,
			...purchaseFilters,
			...itemIdFilters,
		},
		order: sortCriteria,
		attributes: ['id', 'item_id', 'name', 'locale', 'click', 'purchase'],
		offset,
		limit: pageFilters.size,
		raw: true,
	});

	return products;
}

module.exports = {
	getProducts,
};
