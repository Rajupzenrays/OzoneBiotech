const express = require('express');
const router = express.Router();

const getProductController = require('../controllers/getProduct');

router.get('/getProduct', getProductController.getProductController);

module.exports = router;
