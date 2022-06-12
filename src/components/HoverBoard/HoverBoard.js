import React, { useState } from "react";

import randomHex from "./randomHex";

const HoverBoard = () => {
  const [blocks, setBlocks] = useState(
    Array.from({ length: 100 }, (_, i) => "#607d8b")
  );

  const handleColorChange = (id, eventType) => {
    console.log(id, eventType);
    const changedBlocks = [...blocks];
    changedBlocks[id] = eventType === "hover" ? randomHex() : "#607d8b";
    setBlocks(changedBlocks);
  };

  return (
    <div className="hb-container">
      {blocks.map((block, id) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor: block,
            }}
            onMouseOver={() => handleColorChange(id, "hover")}
            onTransitionEnd={() => handleColorChange(id, "transition")}
            className="hb-box"
          ></div>
        );
      })}
    </div>
  );
};
export default HoverBoard;
