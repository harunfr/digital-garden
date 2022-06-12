import React, { useEffect, useRef, useState } from "react";

const AnimatedCountdown = () => {
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [order, setOrder] = useState(0);

  console.log({ calledFromComp: order });

  // const increaseOrder = () => {
  //   setOrder(order + 1)
  // }

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

  return (
    <div className="animated-countdown">
      {order === 1 ? <div>3</div> : null}
      {order === 2 ? <div>2</div> : null}
      {order === 3 ? <div>1</div> : null}
      <div>{isCountingDown ? "Replay" : "Go"}</div>
    </div>
  );
};

export default AnimatedCountdown;
