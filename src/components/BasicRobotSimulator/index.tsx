import React, { useState } from "react";

import "./styles.css";
import { Container, RobotIcon } from "./styles";
import Robot, { TDirection, TCommand } from "./Robot";
import Controls from "./Controls";
import Tiles from "./Tiles";

const robot = new Robot();

interface IDirectionMap {
  [key: string]: number;
}

const BasicRobotSimulator = (): JSX.Element => {
  const [robotPosition, setRobotPosition] = useState({
    coordinates: [0, 0],
  });
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = (command: "A" | "L" | "R"): void => {
    if (command === "L") {
      setCount(count - 1);
    } else if (command === "R") {
      setCount(count + 1);
    }
    robot.evaluate(command);
    const robotClone = { ...robot };
    setRobotPosition({
      coordinates: robotClone.coordinates,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value.toUpperCase());
  };

  const handleEvaluate = () => {
    robot.evaluate(input);
    const robotClone = { ...robot };
    setRobotPosition({
      coordinates: robotClone.coordinates,
    });
  };

  return (
    <Container className="wrapper">
      <div className="controls-wrapper">
        <Controls clickHandler={handleClick} />
        <div className="input-area">
          <input
            className="input"
            type="text"
            onChange={(event) => handleChange(event)}
            value={input}
            placeholder="Enter commands, ex: 'ralalalaaa'"
          />
          <button className="input-btn" onClick={() => handleEvaluate()}>
            Evaluate Commands
          </button>
        </div>
      </div>
      <div className="tiles-wrapper">
        <RobotIcon
          className="robot"
          style={{
            transform: `translate(calc(${
              robotPosition.coordinates[0] * 2.8
            }rem - 50%), calc(${-robotPosition.coordinates[1] * 2.8}rem - 50%)) 
              rotate(${count * 90}deg)`,
          }}
        />
        <Tiles />
      </div>
    </Container>
  );
};

export default BasicRobotSimulator;
