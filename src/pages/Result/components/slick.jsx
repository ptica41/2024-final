import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react"

const Slick = () => {


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };

    return (
        <Slider {...settings}>
            <div className="slick-container">
                <div className="slick-container__date">
                    01.01.2024 
                </div>
                <div className="slick-container__summary">
                    5   
                </div>
                <div className="slick-container__risk">
                    0
                </div>
            </div>
            <div className="slick-container">
                <div className="slick-container__date">
                    01.01.2024 
                </div>
                <div className="slick-container__summary">
                    5   
                </div>
                <div className="slick-container__risk">
                    0
                </div>
            </div>

        </Slider>
    )
}
export default Slick