import React, { useState } from "react";
import "./singleproductmain.scss";
// import ThreeSixtyProductMainCard from "../Cards/360ProductMainCard/ThreeSixtyProductMainCard";
import RightImageComponent from "./RightImageComponent/RightImageComponent";
// import upArrow from "../../Images/UpArrow.svg";
// import downArrow from "../../Images/Arrow---Down-Circle.svg";
import StarRating from "../StarRating/StarRating";
import ChatIcon from "../../Images/Chat.svg";
import FreeShipingIcon from "../../Images/FreeShiping.svg";
import Shipping from "../../Images/Shipping.svg";
import ResizeIcon from "../../Images/SizeAndFit.svg";
import SecurePaymentIcon from "../../Images/SecurePayment.svg";
// import Video from "../../Images/videos/SampleVideo_720x480_1mb.mp4";
import SimilarStyleCard from "../Cards/SimilarStyleCard/SimilarStyleCard";
// import greyBoy from "../../Images/GreyBoy.png";
// import cardItems from "../../Data/cardItems";
import { connect } from "react-redux";
import { addToCart, setSelectedItem } from "../../Store/Action/cartAction";
import { useNavigate } from "react-router-dom";

const SingleProductMain = ({ selectedItem, cartItems,addToCart }) => {
  const navigate = useNavigate();
  const [ratingValue, setRatingValue] = useState(5);
  const [selectedImage, setSelectedImage] = useState(selectedItem[0].image);
  const [showPopup, setShowPopup] = useState(false);
  const handleRatingChange = (newRating) => {
    setRatingValue(newRating);
  };
  const handleAddToCart = (item) => {
    addToCart(item);
    setShowPopup(true);
  };
  const handleGoToCart = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  const handleImageClick = (item, image) => {
    setSelectedImage(image);
  };
  const singleCardImages = selectedItem[0].subImage;

  return (
    <>
      <div className="container-fluid singleproduct_view_container">
        <div className="row">
          <div className="col-6 " style={{ background: "#F6F6F6" }}>
            <div className="vertical_card_ThreeSixty_container">
              <div className="right_image_holder">
                <RightImageComponent image={selectedImage} />
              </div>
            </div>
          </div>

          {selectedItem.map((item) => (
          <div className="col-6">
            <div className="main_container_div">
              <div className="category mb-1">
                <h5>All > {item.category}</h5>
              </div>
              <h3>{item.description}</h3>
              <div className="price_section mt-1 mb-1">
                <span style={{ fontSize: "24px" }}>&#x20B9;</span>
                <span className="main_price">{item.price}</span>
                <span style={{ fontSize: "12px" }}>&#x20B9;</span>
                <span className="discount_price">
                  {item.discountPrice}
                </span>
                <span className="discount_percentage">
                  ({item.discountPercentage})
                </span>
              </div>

              <div className="d-flex justify-content-start align-items-center mb-1">
                <StarRating
                  initialValue={ratingValue}
                  onChange={handleRatingChange}
                  value={5}
                />
                <span>4.5</span>
                <span style={{ marginLeft: "20px" }}>
                  <img src={ChatIcon} alt="img" /> 100 Comment
                </span>
              </div>

             
                <div className="cart_button mt-4 mb-2" key={item.id}>
                  <button
                    className="buttons"
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD TO CART
                  </button>
                  <button className="buttons">Add To Favorite</button>
                </div>
            

              <hr />

              <div className="text_image_content">
                <div className="first_div">
                  <span>
                    <img src={SecurePaymentIcon} alt="img" /> Secure payment
                  </span>
                  <span>
                    <img src={ResizeIcon} alt="img" /> Size & Fit
                  </span>
                </div>
                <div className="first_div">
                  <span>
                    <img src={FreeShipingIcon} alt="img" /> Free shipping
                  </span>
                  <span>
                    <img src={Shipping} alt="img" /> Free Shipping & Return
                  </span>
                </div>
              </div>
            </div>
          </div>
            ))}
        </div>

        <div className="row mt-5">
          <div className="col-8">
            <div className=" product_description_container">
              <h2>Product Description</h2>
              <div className="navigation_container">
                <div className="navigation">
                  <a className="active" href="#description">
                    Description
                  </a>
                  <a className="disabled" href="#user-comment">
                    User Comment
                  </a>
                  <a className="disabled" href="#q-and-a">
                    Question and Answer
                  </a>
                </div>
              </div>
              <p>
             { selectedItem[0].description}
              </p>

              <table>
                <tr>
                  <th>Name</th>
                  <th>Marketed By</th>
                  <th>Country Of Origin</th>
                </tr>
                <tr>
                  <td>Raju</td>
                  <td>
                    Ozone Biotech, Faridabad
                  </td>
                  <td>India</td>
                </tr>
                <tr>
                  <th>Pockets</th>
                  <th>Net Qty</th>
                  <th></th>
                </tr>
                <tr>
                  <td>2 Pockets</td>
                  <td>1 Nos</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-4 ">
            <div className="video_container">
              {/* <video src={Video} controls></video> */}
            </div>
          </div>
        </div>

        {/* <div className="row row_container mt-5 mb-5">
          <div className="centered-content">
            <div className="line"></div>
            <h3 className="similar_styles">Similar Styles</h3>
            <div className="line"></div>
          </div>
        </div> */}

        {/* <SimilarStyleCard
          onItemClick={handleImageClick}
          cardItems={cardItems}
          category={"Similar card"}
          width={"calc(20% - 20px)"}
        /> */}
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedItem: (item) => dispatch(setSelectedItem(item)),
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    selectedItem: state.cart.selectedItem,
  };
};

export default connect(mapStateToProps,{ addToCart, mapDispatchToProps})(SingleProductMain);
