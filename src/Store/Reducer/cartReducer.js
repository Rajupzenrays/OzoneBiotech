import cart1 from "../../Images/Cartimg1.png";
import cart2 from "../../Images/Cartimg2.png";
const initialState = {
  cartItems: [],
  wishlistItems: [],
  selectedItem: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_WISHLIST_ITEMS": // Add this case to initialize wishlistItems from local storage
      return {
        ...state,
        wishlistItems: action.payload,
      };

    case "INITIALIZE_CART_ITEMS": // Add this case to initialize cartItems from local storage
      return {
        ...state,
        cartItems: action.payload,
      };
    case "UPDATE_SIZE":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, size: action.payload.newSize }
            : item
        ),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_ITEM":
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case "REMOVE_WISHLIST_ITEM":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: [action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
