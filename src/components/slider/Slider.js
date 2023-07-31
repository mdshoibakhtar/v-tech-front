import React, { Component } from "react";
import Slider from "react-slick";

import fream1 from "../../assets/img/banner/slider-img/Frame 2.png";
import fream2 from "../../assets/img/banner/slider-img/Frame 3.png";
import fream3 from "../../assets/img/banner/slider-img/Frame 4.png";
import fream4 from "../../assets/img/banner/slider-img/Frame 5.png";
import fream5 from "../../assets/img/banner/slider-img/Frame 6.png";

import "./Slider.css";
function SliderComp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className=" mb-5 text-white  px-35">
        <div className="slider-container">
          <div>
            <Slider {...settings}>
              <div>
                <img src={fream1} alt="" className="fram-img" />
              </div>
              <div>
                <img src={fream2} alt="" className="fram-img" />
              </div>
              <div>
                <img src={fream3} alt="" className="fram-img" />
              </div>
              <div>
                <img src={fream4} alt="" className="fram-img" />
              </div>
              <div>
                <img src={fream5} alt="" className="fram-img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default SliderComp;
