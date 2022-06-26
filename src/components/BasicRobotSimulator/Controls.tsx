import React from "react";

interface ControlsProps {
  clickHandler: (command: "A" | "L" | "R") => void;
}

const Controls = ({ clickHandler }: ControlsProps) => {
  return (
    <div className="controls">
      <button onClick={() => clickHandler("L")} className="control-btn">
        Left
      </button>
      <button onClick={() => clickHandler("A")} className="control-btn">
        Advance
      </button>
      <button onClick={() => clickHandler("R")} className="control-btn">
        Right
      </button>
    </div>
  );
};

export default Controls;
