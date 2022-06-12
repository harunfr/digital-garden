import React, { useRef, useState } from "react";
//  grid-template-rows: 1fr 3fr; use this in jsx to alter current drunk water

const Glasses = (props) => (
  <div
    style={{
      backgroundColor: `${props.waterDrunk > props.index ? "#00f" : "#000"}`,
    }}
    className="dw-to-be-drunk-glasses"
    onClick={props.handleClick}
  >
    250 ml
  </div>
);

const DrinkWater = () => {
  const [waterDrunk, setWaterDrunk] = useState(0);
  const totalWater = useRef(8);
  const [glasses, setGlasses] = useState([
    { 0: false },
    { 1: false },
    { 2: false },
    { 3: false },
    { 4: false },
    { 5: false },
    { 6: false },
    { 7: false },
  ]);

  const handleClick = (i) => {};

  return (
    <div>
      <div className="dw-container">
        <div className="dw-upper-section">
          <div onClick={handleClick}>Increase Count</div>
          <div className="dw-title">Drink Water</div>
          <div className="dw-goal">Goal: 2 Liters</div>
          <div className="dw-total-drunk">
            <div
              className="dw-remaining"
              style={{
                gridTemplateRows: `${
                  1 - waterDrunk / totalWater.current || 999999
                }fr ${waterDrunk / totalWater.current}fr`,
              }}
            >
              {waterDrunk !== totalWater.current ? (
                <div className="dw-remaining-title">
                  {2 - (waterDrunk / totalWater.current) * 2}L remained
                </div>
              ) : null}
              {waterDrunk ? (
                <div className="dw-remaining-percent">{`${
                  (waterDrunk / totalWater.current) * 100
                }%`}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="dw-lower-section">
          <div className="dw-explanation">
            Select how many glasses of water that you have drunk
          </div>
          <div className="dw-all-to-be-drunk-glasses">
            {glasses.map((_, i) => (
              <Glasses
                key={i}
                index={i}
                waterDrunk={waterDrunk}
                handleClick={() => setWaterDrunk(i + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkWater;
