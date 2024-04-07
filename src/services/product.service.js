const axios = require('axios');
const { getOffset } = require('../utils/query');
const config = require('../config/config.js');
const db = require('../db/models');
const { elasticSearch } = require('../config/config.js');

async function getProducts(req) {
	const { page: defaultPage, limit: defaultLimit } = config.pagination;
	const { name, itemId, locale, page, limit } = req.query;

	const pageFilters = {
		page: page || defaultPage,
		size: limit || defaultLimit,
	};
	const offset = getOffset(pageFilters.page, pageFilters.size);

	const activeConfig = await db.configurations.findOne({
		where: { is_active: true },
		raw: true,
	});

	if (!activeConfig) {
		throw new Error('No active configuration found');
	}

	console.log({ activeConfig });

	const elasticQuery = {
		from: offset,
		size: pageFilters.size,
		query: { bool: { must: [] } },
		sort: [
			{
				[activeConfig.sort_by]: {
					order: activeConfig.sort_order,
				},
			},
		],
	};

	['click', 'purchase'].forEach((field) => {
		if (req.query[field]) {
			const fieldJson = JSON.parse(req.query[field]);

			elasticQuery.query.bool.must.push({
				range: {
					[field]: {
						gt: fieldJson.gt,
						lt: fieldJson.lt,
					},
				},
			});
		}
	});

	if (itemId) {
		const itemIdJson = JSON.parse(itemId);
		if (itemIdJson.like)
			elasticQuery.query.bool.must.push({
				wildcard: {
					item_id: `*${itemIdJson.like}*`,
				},
			});
	}

	if (name) {
		const nameJson = JSON.parse(name);
		if (nameJson.like)
			elasticQuery.query.bool.must.push({
				wildcard: {
					name: `*${nameJson.like}*`,
				},
			});
	}

	if (locale) {
		const localeJson = JSON.parse(locale);
		if (localeJson.like)
			elasticQuery.query.bool.must.push({
				wildcard: {
					locale: `*${localeJson.like}*`,
				},
			});
	}
	try {
		const products = await axios.get(
			`http://${elasticSearch.host}:9200/products/_search`,
			{
				data: JSON.stringify(elasticQuery),
				proxy: false,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return products.data;
	} catch (error) {
		console.error('error message: ', error.message);
	}
}

module.exports = {
	getProducts,
};
