import React, { useState } from "react";

const CustomRangeSlider = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div className="custom-range-wrapper">
      <div className="custom-range-container">
        <div
          className="custom-range-indicator"
          style={{
            left: `${rangeValue}%`,
          }}
        >
          {rangeValue}
        </div>
        <input
          value={rangeValue}
          onChange={handleChange}
          type="range"
          className="custom-range-slider"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default CustomRangeSlider;
