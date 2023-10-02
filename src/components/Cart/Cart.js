import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  updateSize,
} from "../../Store/Action/cartAction";
import { postCartData } from "../../Service/cartData";
// import SuccessPopUp from "../PopUp/SuccessPopUp";

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  updateSize,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleSizeChange = (itemId, newSize) => {
    updateSize(itemId, newSize);
  };

  if (cartItems.length === 0) {
    return (
      <h1 style={{ textAlign: "center", margin: "8rem" }}>
        Your Ozone Cart is Empty
      </h1>
    );
  }
  const handleRemoveItem = (item) => {
    setShowPopup(true);
    setTimeout(()=>{
      removeItem(item._id);
    },1000)
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: &#x20B9;{item.price.toFixed(2)}</p>
              <div className="quantity-controls mt-2 mb-2">
                <p>Quantity: </p>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              {/* <div className="sizes">
                <label htmlFor={`size-select-${item.id}`}>
                  Size: &nbsp;&nbsp;&nbsp;
                </label>
                <select
                  id={`size-select-${item.id}`}
                  value={item.size}
                  onChange={(e) => handleSizeChange(item.id, e.target.value)}
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                </select>
              </div> */}
              <button className="delete" onClick={()=>handleRemoveItem(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-details">
        <h2>Order Details</h2>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: &#x20B9;{calculateTotalPrice().toFixed(2)}</p>
        <p>Total Discount: 0</p>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      {showPopup && alert("Item removed")}
      {/* {showPopup && <SuccessPopUp message="Item removed successfully" onClose={() => setShowPopup(false)} />} */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  updateSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
