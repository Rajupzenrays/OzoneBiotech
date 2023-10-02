const getProductService = require('../services/getProduct');

const getProductController = async (req, res, next) => {
  try {
    const products = await getProductService.getProductService();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
};

module.exports = {
  getProductController,
};
