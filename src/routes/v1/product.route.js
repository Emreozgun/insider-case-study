const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
	.route('/')
	.get(
		validate(productValidation.getProducts),
		productController.getProducts
	);

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
 *      summary: Get all products
 *      description: Only admins can retrieve all products.
 *      tags: [Products]
 *      parameters:
 *        - in: query
 *          name: itemId
 *          schema:
 *            type: integer
 *          description: product item id
 *        - in: query
 *          name: name
 *          schema:
 *            type: string
 *          description: product name
 *        - in: query
 *          name: locale
 *          schema:
 *            type: string
 *          description: product locale
 *        - in: query
 *          name: click
 *          schema:
 *            type: integer
 *          description: click number
 *        - in: query
 *          name: purchase
 *          schema:
 *            type: integer
 *          description: purchase number
 *        - in: query
 *          name: sortBy
 *          schema:
 *            type: string
 *          description: sort by query in the form of field:desc/asc (ex. name:asc)
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
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  results:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Product'
 *                  page:
 *                    type: integer
 *                    example: 1
 *                  limit:
 *                    type: integer
 *                    example: 10
 *                  totalPages:
 *                    type: integer
 *                    example: 1
 *                  totalResults:
 *                    type: integer
 *                    example: 1
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */
module.exports = router;
