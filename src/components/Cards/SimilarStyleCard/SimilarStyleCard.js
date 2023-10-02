import React, { useState } from "react";
import "./similarstylecard.scss";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishlist,
  setSelectedItem,
} from "../../../Store/Action/cartAction";
import { useNavigate } from "react-router-dom";
import { postCartData } from "../../../Service/cartData";

const SimilarStyleCard = ({
  addToCart,
  addToWishlist,
  setSelectedItem,
  cardItems,
  category,
  width,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    setTimeout(()=>{
      setShowPopup(true);
    },1000)
    postCartData(item)
      .then((response) => {
        console.log("Data posted successfully:", response);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
    console.log("Item added to wishlist:", item);
  };

  const handleGoToCart = () => {
    setShowPopup(false);
    navigate("/cart");
  };

  const handleCardClicked = (item) => {
    setSelectedItem(item);
    navigate("/single-product");
    console.log("Selected item:", item);
  };

  const filteredCardItems = cardItems.filter(
    (item) => item.category === category
  );

  return (
    <div className="container-fluid">
      <div className="card-container_similar_style">
        {filteredCardItems.map((item) => (
          <div className="card_main" key={item.id} style={{ width: width }}>
            <img
              className="card_image_similar_style"
              src={item.image}
              alt="Card Image"
              onClick={() => handleCardClicked(item)}
            />
            <img
              className="fav-icon"
              src={item.favicon}
              alt="Favorite Icon"
              onClick={() => handleAddToWishlist(item)}
            />
            <div className="text_btns">
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
              <div className="btns_text">
                <div className="price_section">
                  <span style={{ fontSize: "14px" }}>&#x20B9;</span>
                  <span className="main_price_ss">{item.price}</span>
                  <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                    &#x20B9;
                  </span>
                  <span className="discount_price_ss">
                    {item.discountPrice}
                  </span>
                  <span className="discount_percentage_ss">
                    ({item.discountPercentage})
                  </span>
                </div>
                <button onClick={() => handleAddToCart(item)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup_cart">
          <div className="popup-content">
            <p>Item added to the cart successfully</p>
            <button onClick={handleGoToCart}>Go to Cart</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  setSelectedItem,
})(SimilarStyleCard);
