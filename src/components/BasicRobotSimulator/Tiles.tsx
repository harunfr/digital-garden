import React from "react";

const tiles = Array.from(Array(225).keys());

const Tiles = () => {
  return (
    <div className="tiles">
      {tiles.map((_, index) => {
        return <div className="tile" key={index}></div>;
      })}
    </div>
  );
};

export default Tiles;
