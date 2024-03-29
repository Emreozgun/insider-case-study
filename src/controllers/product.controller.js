const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
	const products = await productService.getProducts(req);
	res.send({ products });
});

module.exports = {
	getProducts,
};
