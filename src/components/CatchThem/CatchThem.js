import React, { useRef, useState } from "react";
import uuid from "react-uuid";
import CatchImg from "./CatchImg";

const CatchThem = () => {
  console.log("CatchThem component re-rendered...");
  let fakeId = useRef(0);

  const [coords, setCoords] = useState([
    {
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 360,
      isCatched: false,
      elementId: fakeId.current,
    },
  ]);

  const handleClick = (elementId) => {
    const removedIndex = coords.findIndex((el) => elementId === el.elementId);

    const newCoords = coords.map((el) => {
      if (removedIndex === el.elementId) {
        el.isCatched = true;
      }
      return el;
    });

    setCoords(
      newCoords
        .concat({
          top: Math.random() * 100,
          left: Math.random() * 100,
          rotate: Math.random() * 360,
          elementId: ++fakeId.current,
        })
        .concat({
          top: Math.random() * 100,
          left: Math.random() * 100,
          rotate: Math.random() * 360,
          elementId: ++fakeId.current,
        })
    );
  };

  return (
    <div className="catch-them">
      {coords
        .filter((el) => !el.isCatched)
        .map((coord) => (
          <CatchImg
            key={uuid()}
            handleClick={() => handleClick(coord.elementId)}
            top={coord.top}
            left={coord.left}
            rotate={coord.rotate}
            elementId={coord.elementId}
          />
        ))}
    </div>
  );
};

export default CatchThem;
