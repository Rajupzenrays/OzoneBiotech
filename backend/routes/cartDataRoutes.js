const express = require('express');
const router = express.Router();

const cartDataController = require('../controllers/cartDataController');

router.post('/postCartData', cartDataController.postCartData);
router.get('/getCartData', cartDataController.getCartData);
router.delete('/deleteCartData/:id', cartDataController.deleteCartDataById);
router.put('/:itemId', cartDataController.updateSizeAndQuantity);


module.exports = router;
