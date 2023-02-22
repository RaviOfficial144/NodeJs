// const { Router } = require('express');
const { createProduct,getProductsByProductId } = require('./products.controller');
const router = require('express').Router();

router.post('/',createProduct);

module.exports = router;