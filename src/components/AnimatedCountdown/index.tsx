import React, { useEffect, useState } from "react";

import "./styles.css";
import Number from "./Number";

const AnimatedCountdown = () => {
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    if (order === 0) {
      setOrder(1);
    }
    const timeoutId = setTimeout(() => {
      setOrder(order + 1);
    }, 1000);

    if (order > 3) {
      clearTimeout(timeoutId);
      setIsCountingDown(false);
    }
  }, [order]);

  const handleClick = () => {
    setOrder(0);
    setIsCountingDown(true);
  };

  return (
    <div className="animated-countdown-wrapper">
      <div className="animated-countdown">
        {/* To force re-render components different key is used. */}
        {order === 1 ? (
          <Number key={3} number={3} />
        ) : order === 2 ? (
          <Number key={2} number={2} />
        ) : order === 3 ? (
          <Number key={1} number={1} />
        ) : null}
        <div>
          {isCountingDown ? (
            <div className="get-ready-message">Get Ready</div>
          ) : (
            <div className="replay-section-wrapper">
              <div className="ready-message">Go</div>
              <button className="replay-btn" onClick={handleClick}>
                Replay
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
