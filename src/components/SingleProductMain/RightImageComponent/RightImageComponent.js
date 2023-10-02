import React from "react";
// import imageTwo from "../../../Images/RectangleTwo1.png";
import "./rightimagecomponent.scss";
import { connect } from "react-redux";

const RightImageComponent = ({selectedItem, image }) => {
  console.log("selectedItem===>",)
  return (
    <>
      <div className="container-fluid">
        <div className="image_wrapper">
          <img src={image.image ? image.image : selectedItem[0].image} alt="img" />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    selectedItem: state.cart.selectedItem,
  };
};
export default connect(mapStateToProps)(RightImageComponent);
