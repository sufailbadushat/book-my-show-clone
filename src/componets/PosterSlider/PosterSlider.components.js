import React from "react";

import Poster from "../Navbar/Poster/Poster.components";

import settings from "../Config/PosterCarousal.Config";

import Slider from "react-slick";

const PosterSlider =(props) => {
    return (
        <>
             <div className="flex flex-col items-start py-4">
        <h3 className={
            `text-2xl font-bold ${
                props.isDark ? "text-white ": "text-gray-800"
            }`
        }>{props.title}</h3>
        <p className={
            `text-sm ${
                props.isDark ? "text-white ": "text-gray-800"
            }`
        }>{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((imagae) => (
          <Poster {...imagae} isDark={props.isDark} />
        ))}
      </Slider>
        </>
    )
}

export default PosterSlider;