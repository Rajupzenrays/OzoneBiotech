import React, { useState } from "react";
import "./LandingPage.scss";
import NeemImage from "../../Images/ozoneproduct/removebg/neem-based-product-removebg-preview.png";
import NeemImage1 from "../../Images/ozoneproduct/removebg/neem-products-removebg-preview.png";
import NeemImage2 from "../../Images/ozoneproduct/organic-insecticide-spray.jpg";
import ShivanshuPic from "../../Images/ozoneproduct/ShivanshuPic.jpeg"
const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const images = [NeemImage, NeemImage1, NeemImage2];

  return (
    <div className="landing_main_container">
      <div className="container-fluid landingpage_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="left_content">
                <div className="text_content">
                  <h2>
                    Manufacturer of Neem Based Pesticide,
                    <br /> Oil & Fertilizer.
                    <br />
                  </h2>
                  <h5>
                    We are leading manufacturer of Pure Neem Oil and Neem Oil
                    based Bio-insecticide formulations in India.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_content">
                <div className="content_div">
                  <img src={NeemImage} alt="img" />
                  <div className="btn_right">
                    <button>Shop Now</button>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="decor_para ">
            A number of pests destroy our crops. Neem Based pesticides are effective on over 600 Species of Insects. We have prepared a list of crop and related pests that effects them.
                  </h5>
          </div>
        </div>
      </div>
      {/* About Ozone Bio starts*/}
      <div className="container-fluid landingpage_container">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="left_content">
                <div className="text_content">
                  <h2>
                    Welcome to Ozone Biotech
                    <br />
                  </h2>
                  <h5>
                    We are leading manufacturer of Pure Neem Oil and Neem Oil
                    based Bio-insecticide formulations in India. We have gained
                    expertise in seed extraction, purification process &
                    formulation technologies to transform the natural Neem Oil
                    into a powerful and effective insect growth regulator used
                    as bio insecticides. These products are Biodegradable and
                    Safe for Human use & to Non-Target Organisms.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right_content">
                <div className="content_div content_div_img">
                  <img src={ShivanshuPic} alt="img" className="ShivanshuPic"/>
                  <span style={{color:"#FFF"}}>Shivanshu Gupta <br/> Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Ozone Bio ends*/}

      {/* Carousel part starts*/}
      {/* <div className="carousel_container">
        <div id="carouselExampleIndicators" className="carousel">
          <ol className="carousel-indicators">
            {images.map((_, index) => (
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === activeIndex ? "active" : ""}
              ></li>
            ))}
          </ol>

          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img src={image} alt={`Image ${index + 1}`} />
                <button>SHOP NOW</button>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="carousel-control-next" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div> */}

      {/* Carousel part ends*/}
    </div>
  );
};

export default LandingPage;
