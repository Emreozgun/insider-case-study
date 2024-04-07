const { productService } = require('../../../src/services');

describe('Product service', () => {
	describe('Product service functions', () => {
		const mockRequest = {
			method: 'GET',
			url: '/v1/product',
			query: {},
		};

		describe('get products', () => {
			it('should get all products without filtering', async () => {
				mockRequest.query = {
					// locale: '{"like": "tr"}',
					limit: '15',
					page: '1',
				};
				const products = await productService.getProducts(mockRequest);
				// Test assertions
				expect(products).toBeDefined();
				expect(products.hits.total.value).toBe(37);
				expect(products.hits.hits.length).toBe(15);
			});
			it('should get only one products with unique filter', async () => {
				mockRequest.query = {
					itemId: '{"like": "1086"}',
					name: '{"like": "woo"}',
					locale: '{"like": "tr"}',
					click: '{"gt": 10, "lt": 250}',
					purchase: '{"gt": 10, "lt": 700}',
					limit: '15',
					page: '1',
				};
				const products = await productService.getProducts(mockRequest);
				// Test assertions
				expect(products).toBeDefined();
				expect(products.hits.total.value).toBe(1);
				expect(products.hits.hits.length).toBe(1);
				expect(products.hits.hits[0]._source.name).toEqual(
					'Woo Album #4'
				);
			});
			it('should correctly paginate the results', async () => {
				mockRequest.query = {
					sortBy: 'purchase:asc',
					limit: '10',
					page: '4', // Test for second page
				};
				const products = await productService.getProducts(mockRequest);

				// Test assertions
				expect(products).toBeDefined();
				expect(products.hits.hits.length).toBe(7);
			});
			it('should correctly sort the results when active config is purchase:ascending', async () => {
				mockRequest.query = {
					limit: '15',
					page: '1',
				};
				const products = await productService.getProducts(mockRequest);

				// Test assertions
				expect(products).toBeDefined();
				expect(products.hits.hits.length).toBe(15);

				// Verify sorting order
				const clicks = products.hits.hits.map(
					(product) => product._source.purchase
				);

				for (let i = 0; i < clicks.length - 1; i += 1) {
					expect(clicks[i]).toBeLessThanOrEqual(clicks[i + 1]);
				}
			});
			it('should check no data result with filter', async () => {
				mockRequest.query = {
					name: '{"like": "test"}', // Assuming there is a 'name' field in the database
					limit: '15',
					page: '1',
				};
				const products = await productService.getProducts(mockRequest);

				// Test assertions
				expect(products).toBeDefined();
				expect(products.hits.total.value).toBe(0);
				expect(products.hits.hits.length).toBe(0);
			});
		});
	});
});
