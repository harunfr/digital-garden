import React, { useState } from "react";
import uuid from "react-uuid";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import FrameItem from "./FrameItem";
import creme from "./images/creme.jpg";
import darkBlue from "./images/dark-blue.jpg";
import green from "./images/green.jpg";
import orange from "./images/orange.jpg";
import purple from "./images/purple.jpg";
import turqoise from "./images/turqoise.jpg";

const VerticalSlider = () => {
  const [images, setImages] = useState([
    { src: creme, isChosen: true, backgroundColor: "#9c866f" },
    { src: darkBlue, isChosen: false, backgroundColor: "#02030b" },
    { src: green, isChosen: false, backgroundColor: "#436a4b" },
    { src: orange, isChosen: false, backgroundColor: "#bb4a1e" },
    { src: purple, isChosen: false, backgroundColor: "#c935dd" },
    { src: turqoise, isChosen: false, backgroundColor: "#95aadd" },
  ]);

  const remainder = (num, divisor) => ((num % divisor) + divisor) % divisor;

  function handleSlide(direction) {
    const newImages = [...images];
    const currentIdx = images.findIndex((image) => image.isChosen);
    newImages[currentIdx].isChosen = false;
    let newIdx = 0;

    if (direction === "up") {
      newIdx = remainder(currentIdx + 1, images.length);
    } else if (direction === "down") {
      newIdx = remainder(currentIdx - 1, images.length);
    }

    newImages[newIdx].isChosen = true;

    setImages(newImages);
    console.log(images);
  }

  return (
    <div className="vertical-slider">
      <button
        direction="up"
        className="vs-up"
        onClick={() => handleSlide("up")}
      >
        <AiOutlineArrowUp />
      </button>
      <button
        direction="down"
        className="vs-down"
        onClick={() => handleSlide("down")}
      >
        <AiOutlineArrowDown />
      </button>
      {images
        .filter((el) => el.isChosen)
        .map((frame) => (
          <FrameItem
            key={uuid()}
            src={frame.src}
            backgroundColor={frame.backgroundColor}
          />
        ))}
    </div>
  );
};

export default VerticalSlider;
