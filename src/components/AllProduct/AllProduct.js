import React, { useEffect, useState } from "react";
import SimilarStyleCard from "../Cards/SimilarStyleCard/SimilarStyleCard";
import "./AllProduct.scss";
import Filter from "./Filter/Filter";
import { getProduct } from "../../Service/getProduct";

const AllProduct = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedDressStyle, setSelectedDressStyle] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch product data when the component mounts
    const fetchProductData = async () => {
      try {
        const data = await getProduct();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);
  const filteredCardItems = productData.filter((item) => {
    // Filter by price range
    const priceInRange = item.price >= minPrice && item.price <= maxPrice;

    // Filter by selected sizes
    const sizeMatches =
      selectedSizes.length === 0 || selectedSizes.includes(item.size);

    // Filter by selected color
    const colorMatches = selectedColor === "" || selectedColor === item.color;

    // Filter by selected discount range
    const discountMatches =
      selectedDiscount === "" ||
      (selectedDiscount === "10-20"
        ? parseInt(item.discountPercentage) >= 10 &&
          parseInt(item.discountPercentage) <= 20
        : selectedDiscount === "30-40"
        ? parseInt(item.discountPercentage) >= 30 &&
          parseInt(item.discountPercentage) <= 40
        : selectedDiscount === "40-50"
        ? parseInt(item.discountPercentage) >= 40 &&
          parseInt(item.discountPercentage) <= 50
        : false);

    // Filter by selected dress style
    const dressStyleMatches =
      selectedDressStyle === "" || selectedDressStyle === item.dressStyle;

    return (
      priceInRange &&
      sizeMatches &&
      colorMatches &&
      discountMatches &&
      dressStyleMatches
    );
  });
  const handleImageClick = (item, image) => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Filter
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedDiscount={selectedDiscount}
            setSelectedDiscount={setSelectedDiscount}
            selectedDressStyle={selectedDressStyle}
            setSelectedDressStyle={setSelectedDressStyle}
          />
        </div>
        <div className="col-9">
          <h6 className="head_text">All</h6>
          <div className="allproduct_card_holder">
            <h5>All Product</h5>
            {!filteredCardItems ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <SimilarStyleCard
                onItemClick={handleImageClick}
                cardItems={filteredCardItems}
                category="All Product"
                width={"calc(25% - 20px)"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
