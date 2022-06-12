import testImg from "./images/green-arrow.png";
import React from "react";

const CatchImg = (props) => {
  console.log("image component rendered..");
  return (
    <img
      draggable={false}
      className="catch-img"
      onClick={props.handleClick}
      src={`${testImg}`}
      style={{
        top: `${props.top}vh`,
        left: `${props.left}vw`,
        transform: `rotate(${props.rotate}deg)`,
      }}
    />
  );
};
export default React.memo(CatchImg);
