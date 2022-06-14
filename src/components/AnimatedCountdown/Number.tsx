import React from "react";

interface INumber {
  number: number;
}

const Number = ({ number }: INumber) => {
  return <div className="number">{number}</div>;
};

export default Number;
