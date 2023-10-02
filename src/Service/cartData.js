import axios from 'axios';
import API from '../api';

async function getCartData() {
  try {
    const response = await axios.get(API.getCartData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function postCartData(cartItem) {
  try {
    const response = await axios.post(API.postCartData, cartItem);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { getCartData,postCartData };
