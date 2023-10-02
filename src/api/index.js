import { environment } from '../environments/environment'

const baseUrl = environment.baseUrl;
const API = Object.freeze({
  getProduct: `${baseUrl}/product/getProduct`,
  getCartData:`${baseUrl}/cartData/getCartData`,
  postCartData:`${baseUrl}/cartData/postCartData`,
  deleteCartData:`${baseUrl}/cartData/deleteCartData`,
  });
export default API;
