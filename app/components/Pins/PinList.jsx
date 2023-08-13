import React from "react";
import PinItem from "./PinItem";

const PinList = ({ listOfPins }) => {
  console.log(listOfPins);
  return (
    <div className="mt-7 px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 mb-4 xl:columns-5 space-y-6 mx-auto">
      {listOfPins.map((item, index) => (
        <div key={index}>
          <PinItem pin={item} />
        </div>
      ))}
    </div>
  );
};

export default PinList;
