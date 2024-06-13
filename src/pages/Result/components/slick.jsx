import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"

import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../../context'
import Part from "./part"

const Slick = () => {

    const { histograms } = useContext(AuthContext)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: histograms.length >= 6 ? 6 : histograms.length,
        slidesToScroll: 1,
      };


    return (
        <Slider {...settings}>
            { histograms.map((item, index) => (
                <Part date={ item.date } total={ item.total } risk={ item.risk } key={Date.now()}/>
            ))}
        </Slider>
    )
}
export default Slick