import React from "react";
import './AboutUs.scss'
const Title = ({title}) => {
  return (
    <div className="container-fluid aboutus_title">
      <div className="title_row ">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
