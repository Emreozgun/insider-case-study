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

router.get('/', productController.getProducts);

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
 */
module.exports = router;
