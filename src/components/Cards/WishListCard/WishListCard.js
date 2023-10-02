import React, { useEffect, useState } from "react";
import "./wishlistcard.scss";
import { connect } from "react-redux";
import { addToCart,removeWishListItem } from "../../../Store/Action/cartAction";
import { useNavigate } from "react-router-dom";
import CrossIcon from "../../../Images/CrossIcon.svg";

const WishListCard = ({ addToCart, wishlistItems, category, width ,removeWishListItem}) => {
    console.log("wishlistItems-->",wishlistItems)
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowPopup(true);
  };

  const handleGoToCart = () => {
    setShowPopup(false);
    navigate("/cart");
  };

  // Filter the wishlist items based on the category
  const filteredWishlistItems = wishlistItems.filter(
    (item) => item.category === category
  );
  return (
    <div className="wishlist-card-container">
      {wishlistItems.map((item) => (
        <div className="wishlist-card" key={item.id}>
          <img className="card-image" src={item.image} alt="Card Image" />
          <img className="fav-icon" src={CrossIcon} alt="Cross Icon"  onClick={() => removeWishListItem(item.id)}/>
          <div className="text-btns">
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
            <div className="btns-text">
              <div className="price-section">
                <span style={{ fontSize: "14px" }}>&#x20B9;</span>
                <span className="main-price">{item.price}</span>
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                  &#x20B9;
                </span>
                <span className="discount-price">{item.discountPrice}</span>
                <span className="discount-percentage">
                  ({item.discountPercentage} % Off)
                </span>
              </div>
              <button onClick={() => handleAddToCart(item)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}

      {showPopup && (
        <div className="popup-cart">
          <div className="popup-content">
            <p>Item added to the cart successfully</p>
            <div>
              <button onClick={handleGoToCart}>Go to Cart</button>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.cart.wishlistItems,
  };
};

export default connect(mapStateToProps, { addToCart,removeWishListItem })(WishListCard);
