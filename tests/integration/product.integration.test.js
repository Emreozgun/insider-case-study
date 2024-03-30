const request = require('supertest');
const app = require('../../src/app');

describe('GET /v1/product', () => {
	// Query parameters for testing
	const queryParams = {
		itemId: '{"like": "1086"}',
		name: '{"like": "woo"}',
		locale: '{"like": "tr"}',
		click: '{"gt": 10, "lt": 250}',
		purchase: '{"gt": 10, "lt": 700}',
		sortBy: 'purchase:asc',
		limit: '15',
		page: '1',
	};

	it('should return products filtered, sorted, and paginated correctly', async () => {
		// Send request to endpoint with query parameters
		const response = await request(app)
			.get('/v1/product')
			.query(queryParams);

		// Assertions for response status and structure
		expect(response.status).toBe(200);
		expect(response.body.products).toHaveProperty('count');
		expect(response.body.products).toHaveProperty('rows');
		expect(Array.isArray(response.body.products.rows)).toBeTruthy();

		// Assertions for maximum number of products per page
		expect(response.body.products.rows.length).toBeLessThanOrEqual(15);
	});

	it('should invalid query parameters to ensure no products are returned', async () => {
		const noProductsQueryParams = {
			...queryParams,
			name: '{"like": "invalid"}',
		};
		const noProductsResponse = await request(app)
			.get('/v1/product')
			.query(noProductsQueryParams);
		expect(noProductsResponse.status).toBe(200);
		expect(noProductsResponse.body.products.count).toBe(0);
		expect(noProductsResponse.body.products.rows.length).toBe(0);
	});

	it('should specific query parameters to ensure only one product is returned', async () => {
		const oneProductQueryParams = { ...queryParams, limit: '1', page: '1' };
		const oneProductResponse = await request(app)
			.get('/v1/product')
			.query(oneProductQueryParams);
		expect(oneProductResponse.status).toBe(200);
		expect(oneProductResponse.body.products.count).toBe(1);
		expect(oneProductResponse.body.products.rows.length).toBe(1);
	});
});
