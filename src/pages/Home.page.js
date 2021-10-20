import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../componets/Entertainments/Entertaiment.component";
import Premier from "../componets/premiere/premiere.componets";

import PosterSlider from "../componets/PosterSlider/PosterSlider.components";
import TempPosters from "../componets/Config/TempPosters.Config"

function HomePage() {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect (() => {
    const reqPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
    };
    reqPopularMovies();
  },[]);
  console.log({popularMovies});

  return (
    <>
     <div className="flex flex-col gap-10">
     <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          The best of entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="bg-navCol-200 py-16">
      
        <div className="container mx-auto px-4  ">
        <div className="flex">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Rupay"
            className="h-full w-full"
          />
        </div>
          <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every friday" isDark />
        </div>
      </div>
     </div>

     <div className="container mx-auto px-4 ">
       <PosterSlider 
       images={popularMovies}
       title="Online Streaming Events"
       isDark={false}
       />
     </div>
     <div className="container mx-auto px-4">
       <PosterSlider 
       images={popularMovies}
       title="Outdoor Events"
       isDark={false}
       />
     </div>
    </>
  );
}

export default HomePage;
