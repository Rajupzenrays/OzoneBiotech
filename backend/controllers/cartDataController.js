const cartDataService = require('../services/cartDataService');

const postCartData = async (req, res, next) => {
  try {
    const cartData = req.body;
    const result = await cartDataService.postCartData(cartData);
    console.log(result);
    res.status(200).json({ success: true, message: 'Cart data saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const getCartData = async (req, res, next) => {
    try {
      const cartData = await cartDataService.getCartData();
      res.status(200).json({ success: true, data: cartData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  const deleteCartDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await cartDataService.deleteCartDataById(id);
  
      if (!result) {
        return res.status(404).json({ success: false, message: 'Cart data not found' });
      }
  
      res.status(200).json({ success: true, message: 'Cart data deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  const updateSizeAndQuantity = async (req, res) => {
    try {
      const { itemId } = req.params;
      const { size, quantity } = req.body;
      console.log("itemIditemId",itemId,size, quantity)
  
      // Call the cartDataService function to update the size and quantity of the cart item
      const updatedCartItem = await cartDataService.updateSizeAndQuantity(itemId, size, quantity);
  
      if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: 'Cart item not found' });
      }
  
      res.status(200).json({ success: true, message: 'Cart item size and quantity updated successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

module.exports = {
  postCartData,getCartData,deleteCartDataById,updateSizeAndQuantity
};
