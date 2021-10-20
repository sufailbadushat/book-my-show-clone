import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Navbar/Poster/Poster.components";
//config
import settings from "../Config/PosterCarousal.Config";
//Images
import PremiereImages from "../Config/TempPosters.Config";

export const Premier = () => {
  return (
    <>
      <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
      </div>
      <Slider {...settings}>
        {PremiereImages.map((imagae) => (
          <Poster {...imagae} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
