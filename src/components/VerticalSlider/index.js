import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import "./styles.css";
import FrameItem from "./FrameItem";

import imagesData from "./imagesData";

const VerticalSlider = () => {
  const [order, setOrder] = useState(0);

  function handleSlide(direction) {
    console.log({ order });
    if (direction === "up") {
      if (order === 0) {
        setOrder(1 - imagesData.length);
      } else {
        setOrder(order + 1);
      }
    }
    if (direction === "down") {
      if (order === 1 - imagesData.length) {
        setOrder(0);
      } else {
        setOrder(order - 1);
      }
    }
  }

  return (
    <div className="vertical-slider">
      <div className="buttons-container">
        <button
          direction="up"
          className="vs-up"
          onClick={() => handleSlide("up")}
        >
          <AiOutlineArrowDown />
        </button>
        <button
          direction="down"
          className="vs-down"
          onClick={() => handleSlide("down")}
        >
          <AiOutlineArrowUp />
        </button>
      </div>

      {imagesData.map((imageData) => (
        <FrameItem
          length={imagesData.length}
          key={imageData.id}
          src={imageData.src}
          backgroundColor={imageData.backgroundColor}
          order={order}
          insightFulMessage={imageData.insightFulMessage}
          insightFulTitle={imageData.insightFulTitle}
        />
      ))}
    </div>
  );
};

export default VerticalSlider;
