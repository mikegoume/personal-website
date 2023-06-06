import React from "react";
import ProfilePicture from "../../assets/images/profilePicture.jpg";
import "./Opening.css";
const Opening = () => {
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row h-screen lg:justify-between items-center">
      <div className="w-3/4">
        <p className="text-4xl text-center font-bold mb-2 lg:text-7xl lg:text-left">
          Front-End React Developer
        </p>
        <p className="text-sm text-center lg:text-lg lg:text-left">
          Hey, I'm Mike Goumenakis. A passionate Front-End React Developer
          bassed in Heraklion, Greece
        </p>
      </div>
      <div className="w-1/2 mb-5 lg:w-1/4 lg:mb-0 image-container">
        <img alt="" src={ProfilePicture} />
      </div>
    </div>
  );
};

export default Opening;
