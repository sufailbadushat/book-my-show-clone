import React from "react";
import Poster from "../componets/Navbar/Poster/Poster.components";
import PlaysFilter from "../componets/PlaysFilters/PlaysFilters.components";

const Plays = () => {
  return (
    <>
      <div className=" bg-gray-100">
        <div className=" container m-auto p-4">
          <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-8/12">
              <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
              <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="DUM BIRIYANI 15TH OCT"
                    subtitle="English ₹199"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="DUM BIRIYANI 15TH OCT"
                    subtitle="English ₹199"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="DUM BIRIYANI 15TH OCT"
                    subtitle="English ₹199"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="DUM BIRIYANI 15TH OCT"
                    subtitle="English ₹199"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                    title="DUM BIRIYANI 15TH OCT"
                    subtitle="English ₹199"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 hidden lg:block">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div>
                <PlaysFilter
                  title="Date"
                  tags={["Today", "Tomorrow", "This Weekend"]}
                />
                <PlaysFilter title="Language" tags={["Tammil", "Kannada"]} />
                <PlaysFilter title="Categories" tags={["Theature"]} />
                <PlaysFilter title="Genres" tags={["Drama", "Comedy"]} />
                <PlaysFilter
                  title="More Filters"
                  tags={["Online Streaming", "Outdoor Evnets"]}
                />
                <PlaysFilter
                  title="Price"
                  tags={["Free", "0-500", "501-200", "2000 Above"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
