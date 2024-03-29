const express = require('express');
const productRoute = require('./product.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/product', productRoute);
router.use('/docs', docsRoute);

module.exports = router;
