import React, { useEffect, useRef, useState } from "react";

const AutoText = () => {
  const [blinkingText, setBlinkingText] = useState("");
  const dummyAutoText = "Wow, I am blinking!".split("");
  let tempStr = useRef("");

  useEffect(() => {
    for (let i = 0; i < dummyAutoText.length; i++) {
      setTimeout(() => {
        tempStr.current += dummyAutoText[i];
        setBlinkingText(tempStr.current);
      }, i * 300);
    }
  }, []);

  return (
    <div className="at-wrapper">
      <div className="at-text">
        {blinkingText} <span className="blinking-cursor">|</span>
      </div>
    </div>
  );
};

export default AutoText;
