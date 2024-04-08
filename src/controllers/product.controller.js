const catchAsync = require('../utils/catchAsync');
const { configurationService, productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
	const products = await productService.getProducts(req);
	res.send({ products });
});

const setActiveConfig = catchAsync(async (req, res) => {
	const { id } = req.params;
	await configurationService.setActiveConfig(id);
	res.send({ success: true });
});

const getAllConfigs = catchAsync(async (req, res) => {
	const configs = await configurationService.getAllConfigs();
	res.send({ configs });
});

module.exports = {
	getProducts,
	setActiveConfig,
	getAllConfigs,
};
