import React, { useRef, useState } from "react";
import dragNDropImage from "./drag-n-drop-image.jpg";

const DragNDrop = () => {
  const [hasImage, setHasImage] = useState({
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
  });
  const [imageDragging, setImageDragging] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const isMouseDown = useRef(false);
  // const coords = useRef({x: 0, y: 0})

  const handleMouseDown = (id, e) => {
    // e.preventDefault()
    isMouseDown.current = true;
  };
  const handleMouseMove = (id, e) => {
    // e.preventDefault()
    if (!isMouseDown.current) return;

    if (hasImage[id]) {
      setImageDragging(true);
      setCoords({
        x: e.pageX,
        y: e.pageY,
      });
    }
    // console.log(coords.current);
  };
  const handleMouseUp = () => {
    isMouseDown.current = false;
  };
  const handleImgMouseMove = (e) => {
    e.preventDefault();
    setCoords({
      x: e.pageX,
      y: e.pageY,
    });
    console.log(e);
  };

  return (
    <div className="drag-n-drop">
      <img
        className="exp-image"
        src={dragNDropImage}
        alt="experimental image"
        onMouseMove={handleImgMouseMove}
        style={
          isMouseDown && imageDragging
            ? {
                display: "block",
                top: `${coords.y - 50}px`,
                left: `${coords.x - 50}px`,
              }
            : {}
        }
      />
      <div className="block" />
      <div className="block" />
      <div
        className="block"
        style={{ backgroundImage: hasImage[3] ? `url(${dragNDropImage})` : "" }}
        onMouseDown={() => handleMouseDown(3)}
        onMouseUp={() => handleMouseUp(3)}
        onMouseMove={(e) => handleMouseMove(3, e)}
      />
      <div className="block" />
      <div className="block" />
    </div>
  );
};
// style={ { backgroundImage: dropped[1] ? `url(${dragNDropImage})` : '' }}

export default DragNDrop;
