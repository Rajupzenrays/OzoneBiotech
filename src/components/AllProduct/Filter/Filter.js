import React, { useState } from "react";
import "./filter.scss";
const Filter = (props) => {
    const priceGap = 1000;


    const {
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedSizes,
        setSelectedSizes,
        selectedColor,
        setSelectedColor,
        selectedDiscount,
        setSelectedDiscount,
        selectedDressStyle,
        setSelectedDressStyle,
      } = props;
  const [accordionExpanded, setAccordionExpanded] = useState("");

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (maxPrice - newMinPrice >= priceGap) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice - minPrice >= priceGap && newMaxPrice <= 10000) {
      setMaxPrice(newMaxPrice);
    }
  };

  const handleRangeMinChange = (e) => {
    const newMinVal = parseInt(e.target.value);
    if (maxPrice - newMinVal >= priceGap) {
      setMinPrice(newMinVal);
    }
  };

  const handleRangeMaxChange = (e) => {
    const newMaxVal = parseInt(e.target.value);
    if (newMaxVal - minPrice >= priceGap && newMaxVal <= 10000) {
      setMaxPrice(newMaxVal);
    }
  };

  const calculateRangeStyle = () => {
    const minPercentage = (minPrice / 10000) * 100;
    const maxPercentage = (maxPrice / 10000) * 100;
    return { left: `${minPercentage}%`, right: `${100 - maxPercentage}%` };
  };

  const toggleAccordion = (filterName) => {
    if (accordionExpanded === filterName) {
      setAccordionExpanded("");
    } else {
      setAccordionExpanded(filterName);
    }
  };

  const handleSizeSelection = (size) => {
    const updatedSizes = [...selectedSizes];
    if (updatedSizes.includes(size)) {
      updatedSizes.splice(updatedSizes.indexOf(size), 1);
    } else {
      updatedSizes.push(size);
    }
    setSelectedSizes(updatedSizes);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleDiscountSelection = (discount) => {
    console.log("discount", discount);
    setSelectedDiscount(discount);
  };

  const handleDressStyleSelection = (style) => {
    setSelectedDressStyle(style);
  };

  return (
    <>
      <div className="filter-section">
        <h4>Filters</h4>
        <div className="accordion" id="filtersAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="priceRangeHeading">
              <button
                className={`accordion-button ${
                  accordionExpanded === "priceRange" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("priceRange")}
              >
                Price Range
              </button>
            </h2>
            <div
              id="priceRangeCollapse"
              className={`accordion-collapse ${
                accordionExpanded === "priceRange" ? "show" : ""
              }`}
              aria-labelledby="priceRangeHeading"
              data-bs-parent="#filtersAccordion"
            >
              <div className="accordion-body">
                <div className="wrapper">
                  <div className="slider">
                    <div
                      className="progress"
                      style={calculateRangeStyle()}
                    ></div>
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      className="range-min"
                      min="0"
                      max="10000"
                      value={minPrice}
                      step="100"
                      onChange={handleRangeMinChange}
                    />
                    <input
                      type="range"
                      className="range-max"
                      min="0"
                      max="10000"
                      value={maxPrice}
                      step="100"
                      onChange={handleRangeMaxChange}
                    />
                  </div>
                  <div className="price-input">
                    <div className="field">
                      <span>Min</span>
                      <input
                        type="number"
                        className="input-min"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                      />
                    </div>
                    <div className="separator">-</div>
                    <div className="field">
                      <span>Max</span>
                      <input
                        type="number"
                        className="input-max"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="discountHeading">
              <button
                className={`accordion-button ${
                  accordionExpanded === "discount" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("discount")}
              >
                Discount
              </button>
            </h2>
            <div
              id="discountCollapse"
              className={`accordion-collapse ${
                accordionExpanded === "discount" ? "show" : ""
              }`}
              aria-labelledby="discountHeading"
              data-bs-parent="#filtersAccordion"
            >
              <div className="accordion-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="discountCheckbox1"
                    checked={selectedDiscount === "10-20"}
                    onChange={() => handleDiscountSelection("10-20")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="discountCheckbox1"
                  >
                    10% - 20%
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="discountCheckbox1"
                    checked={selectedDiscount === "30-40"}
                    onChange={() => handleDiscountSelection("30-40")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="discountCheckbox1"
                  >
                    30% - 40%
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="discountCheckbox1"
                    checked={selectedDiscount === "40-50"}
                    onChange={() => handleDiscountSelection("40-50")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="discountCheckbox1"
                  >
                    40% - 50%
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
