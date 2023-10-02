import axios from 'axios';
import API from '../api';

async function getProduct() {
  try {
    const response = await axios.get(API.getProduct);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { getProduct };
