import React from "react";
import noBlack from "./images/no-black.jpg";

const BackgroundBoxes = () => {
  return (
    <div className="background-boxes-container">
      {/* <img className="background-boxes-img" src={noBlack} /> */}

      <div
        className="bb-box-1 bb-box"
        style={{
          backgroundImage: `url(${noBlack})`,
        }}
      />
      <div
        className="bb-box-2 bb-box"
        style={{
          backgroundImage: `url(${noBlack})`,
        }}
      />
      <div
        className="bb-box-3 bb-box"
        style={{
          backgroundImage: `url(${noBlack})`,
        }}
      />
      <div
        className="bb-box-4 bb-box"
        style={{
          backgroundImage: `url(${noBlack})`,
        }}
      />
    </div>
  );
};

export default BackgroundBoxes;
