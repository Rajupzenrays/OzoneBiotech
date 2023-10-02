const { getClient } = require("../constants/db");
const { ObjectId } = require("mongodb");

const postCartData = async (cartData) => {
  try {
    const client = getClient();
    const database = client.db("ozone-biotech");
    const collection = database.collection("cartData");

    // Check if the cart item already exists in the database for the given user and item ID
    const existingCartItem = await collection.findOne({
      userId: cartData.userId,
      itemId: cartData.itemId,
    });

    if (existingCartItem) {
      // If cart item already exists, update its quantity
      const newQuantity = existingCartItem.quantity + 1;
      await collection.updateOne(
        { _id: existingCartItem._id },
        { $set: { quantity: newQuantity } }
      );
    } else {
      // If cart item doesn't exist, insert a new cart item
      await collection.insertOne(cartData);
    }
  } catch (error) {
    throw new Error("Error saving cart data to the database");
  }
};

const getCartData = async () => {
  try {
    const client = getClient();
    const database = client.db("ozone-biotech");
    const collection = database.collection("cartData");

    const data = await collection.find({}).toArray();
    return data;
  } catch (error) {
    throw new Error("Error fetching cart data from the database");
  }
};

const deleteCartDataById = async (id) => {
  try {
    const client = getClient();
    const database = client.db("ozone-biotech");
    const collection = database.collection("cartData");

    const result = await collection.deleteOne({ _id:id });
    return result.deletedCount !== 0;
  } catch (error) {
    throw new Error("Error deleting cart data from the database");
  }
};

const updateSizeAndQuantity = async (itemId, size, quantity) => {
  try {
    console.log("Updating cart item with _id:", itemId);

    if (!ObjectId.isValid(itemId)) {
      throw new Error("Invalid ObjectId for cart item");
    }

    const client = getClient();
    const database = client.db("ozone-biotech");
    const collection = database.collection("cartData");

    const result = await collection.updateOne(
      { _id:itemId },
      { $set: { size, quantity } }
    );

    console.log("Update result:", result);

    if (result.matchedCount === 0) {
      return null; // Cart item with the specified _id not found
    }

    return result.modifiedCount !== 0; // Returns true if the cart item was updated successfully
  } catch (error) {
    console.error('Error updating cart item size and quantity:', error);
    throw new Error("Error updating cart item size and quantity in the database");
  }
};


module.exports = {
  postCartData,
  getCartData,
  deleteCartDataById,
  updateSizeAndQuantity,
};
