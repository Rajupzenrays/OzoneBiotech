import React, { useState } from "react";
import "./starrating.scss";
const StarRating = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <>
      <div className="rating">
        {" "}
        <input type="radio" name="rating" value="5" id="5" />
        <label for="5">☆</label>{" "}
        <input type="radio" name="rating" value="4" id="4" />
        <label for="4">☆</label>{" "}
        <input type="radio" name="rating" value="3" id="3" />
        <label for="3">☆</label>{" "}
        <input type="radio" name="rating" value="2" id="2" />
        <label for="2">☆</label>{" "}
        <input type="radio" name="rating" value="1" id="1" />
        <label for="1">☆</label>
      </div>
    </>
  );
};

export default StarRating;
