const { getClient } = require("../constants/db");
const getProductService = async (info) => {
    try {
        const client = getClient();
        const database = client.db("ozone-biotech");
        const collection = database.collection("all-product");
    
        const products = await collection.find({}).toArray();
        return products;
      } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
      }
  };
  
  module.exports = {
    getProductService,
  };