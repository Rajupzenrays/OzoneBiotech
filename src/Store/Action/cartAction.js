import axios from 'axios'
import API from '../../api';
export const increaseQuantity = (itemId) => {
    return {
      type: "INCREASE_QUANTITY",
      payload: itemId,
    };
  };
  
  export const decreaseQuantity = (itemId) => {
    return {
      type: "DECREASE_QUANTITY",
      payload: itemId,
    };
  };
  
  export const removeItem = (itemId) => {
    return async (dispatch) => {
      try {
        // Make an API call to delete the cart item by its _id
        await axios.delete(`${API.deleteCartData}/${itemId}`);
  
        // Dispatch the action to update the Redux store after successful deletion
        dispatch({
          type: "REMOVE_ITEM",
          payload: itemId,
        });
      } catch (error) {
        console.error("Error deleting cart item:", error);
        // Handle the error if the deletion fails
      }
    };
  };
  
  export const removeWishListItem = (itemId) => {
    return {
      type: "REMOVE_WISHLIST_ITEM",
      payload: itemId,
    };
  };
  export const addToCart = (item) => {
    return {
      type: "ADD_TO_CART",
      payload: item,
    };
  };

  export const addToWishlist = (item) => {
    return {
      type: "ADD_TO_WISHLIST",
      payload: item,
    };
  };
  export const updateSize = (itemId, newSize) => {
    return {
      type: "UPDATE_SIZE",
      payload: {
        itemId,
        newSize,
      },
    };
  };

export const setSelectedItem = (item) => {
  return {
    type: "SET_SELECTED_ITEM",
    payload: item,
  };
};