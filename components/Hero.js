import React from "react";
import InnerContainer from "./layout/InnerContainer";

// should be a grid hero
const Hero = () => {
  return (
    <InnerContainer>
      <div className="grid grid-cols-3 gap-4 pb-4">
        <div className="bg-gray-400 h-44 ">ps5</div>
        <div className="bg-blue-400 h-44 ">xbox</div>
        <div className="bg-red-400 h-44 ">Switch</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-400 h-72">PC</div>
        <div className="bg-green-400 h-72">Accessories</div>
      </div>
    </InnerContainer>
  );
};

export default Hero;
