import React, { useEffect, useState } from "react";
import "./wishlist.scss";
import WishListCard from "../Cards/WishListCard/WishListCard";
import { connect } from "react-redux";

const Wishlist = ({ wishlistItems }) => {
  useEffect(() => {
    // Save wishlistItems to local storage whenever it changes
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  const calculateTotalPrice = () => {
    return wishlistItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <>
      {wishlistItems.length > 0 ? (
        <div className="wishlist">
          <div className="wishlist-items">
            <WishListCard />
          </div>

          <div className="order-details">
            <div className="order-details-container">
              <h2>Order Details</h2>
              <p>Total Items: {wishlistItems.length}</p>
              <p>Total Price: &#x20B9;{calculateTotalPrice().toFixed(2)}</p>
              <p>Total Discount: 0</p>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center", margin: "10rem" }}>
          {" "}
          Your Gentleman Attlier Wishlist is Empty
        </h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.cart.wishlistItems,
  };
};

export default connect(mapStateToProps)(Wishlist);
