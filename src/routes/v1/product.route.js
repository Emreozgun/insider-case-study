const express = require('express');
// const validate = require('../../middlewares/validate');
// const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

// router
// 	.route('/')
// 	.get(
// 		validate(productValidation.getProducts),
// 		productController.getProducts
// 	);

// TODO: add enpoint for change active configuration

router.get('/', productController.getProducts);
router.post('/config/active/:id', productController.setActiveConfig);
router.get('/configs', productController.getAllConfigs);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products retrieval
 */

/**
 * @swagger
 * /product:
 *    get:
 *       summary: Get all products
 *       description: Only admins can retrieve all products.
 *       tags: [Products]
 *       parameters:
 *        - in: query
 *          name: itemId
 *          schema:
 *            type: json
 *            example:
 *              like: '1086'
 *            properties:
 *              like:
 *                type: string
 *          description: product item id
 *        - in: query
 *          name: name
 *          schema:
 *            type: json
 *            example:
 *              like: 'woo'
 *            properties:
 *              like:
 *                type: string
 *          description: product name
 *        - in: query
 *          name: locale
 *          schema:
 *            type: json
 *            example:
 *              like: 'tr'
 *            properties:
 *              like:
 *                type: string
 *          description: product locale
 *        - in: query
 *          name: click
 *          schema:
 *            type: json
 *            example:
 *              gt: 10
 *              lt: 250
 *            properties:
 *              gt:
 *                type: integer
 *              lt:
 *                type: integer
 *          description: click number
 *        - in: query
 *          name: purchase
 *          schema:
 *            type: json
 *            example:
 *              gt: 10
 *              lt: 700
 *            properties:
 *              gt:
 *                type: integer
 *              lt:
 *                type: integer
 *          description: purchase number
 *        - in: query
 *          name: limit
 *          schema:
 *            type: integer
 *            minimum: 1
 *          default: 10
 *          description: Maximum number of users
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          description: Page number
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   took:
 *                     type: integer
 *                     description: Time taken for the request to be processed
 *                   timed_out:
 *                     type: boolean
 *                     description: Whether the request timed out or not
 *                   _shards:
 *                     type: object
 *                     properties:
 *                       total:
 *                         type: integer
 *                         description: Total number of shards
 *                       successful:
 *                         type: integer
 *                         description: Number of successful shards
 *                       skipped:
 *                         type: integer
 *                         description: Number of skipped shards
 *                       failed:
 *                         type: integer
 *                         description: Number of failed shards
 *                   hits:
 *                     type: object
 *                     properties:
 *                       total:
 *                         type: object
 *                         properties:
 *                           value:
 *                             type: integer
 *                             description: Total number of hits
 *                           relation:
 *                             type: string
 *                             description: Relation of the value (e.g., 'eq' for equal)
 *                       max_score:
 *                         type: number
 *                         description: Maximum score among hits
 *                       hits:
 *                         type: array
 *                         items:
 *                           type: object
 *                           description: Information about each hit
 * /product/config/active/{id}:
 *    post:
 *       summary: Set active configuration
 *       description: Set active configuration by id
 *       tags: [Products]
 *       parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: Configuration id
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message
 *                   data:
 *                     type: object
 *                     description: Updated configuration data
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 * /product/configs:
 *    get:
 *       summary: Get all configurations
 *       description: Retrieve all configurations
 *       tags: [Products]
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   configurations:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Configuration'
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 */
module.exports = router;
