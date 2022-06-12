import React, { useState } from "react";

import chars, { symbols, digits, uppercases, lowercases } from "./chars";

function getRandomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const PasswordGenerator = () => {
  const [options, setOptions] = useState({
    upper: false,
    lower: false,
    number: false,
    symbol: false,
  });
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const handleLengthChange = (e) => {
    const input = e.target.value;
    if (input < 5) {
      setLength(5);
    } else {
      setLength(e.target.value);
    }
  };

  const handleCharType = (type) => setOptions({ ...options, [type]: true });

  const handleGenerate = () => {
    let newPassword = "";
    if (options.upper) {
      newPassword += chars[getRandomInt(42, 67)];
    }
    if (options.lower) {
      newPassword += chars[getRandomInt(68, 93)];
    }
    if (options.number) {
      newPassword += chars[getRandomInt(32, 41)];
    }
    if (options.symbol) {
      newPassword += chars[getRandomInt(0, 31)];
    }
    console.log(newPassword);

    while (newPassword.length <= length) {
      newPassword += chars[getRandomInt(0, 93)];
      // console.log(newPassword, chars[getRandomInt]);
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <div>Password: {password}</div>
      <div onClick={() => console.log(options, length)}>Log options</div>
      <label>Password Length: </label> <br />
      <input
        onChange={handleLengthChange}
        className="pg-input"
        type="number"
        id="tentacles"
        value={length}
        name="tentacles"
        min="5"
      />{" "}
      <br />
      <label> Include uppercase letters </label> <br />
      <input onChange={() => handleCharType("upper")} type="checkbox" /> <br />
      <label> Include lowercase letters </label> <br />
      <input onChange={() => handleCharType("lower")} type="checkbox" /> <br />
      <label> Include numbers </label> <br />
      <input onChange={() => handleCharType("number")} type="checkbox" /> <br />
      <label> Include symbols </label> <br />
      <input onChange={() => handleCharType("symbol")} type="checkbox" /> <br />
      <button onClick={handleGenerate}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;

/**
 * var AllChars = [];
  for (var i=32; i<127; i++)
    AllChars.push(String.fromCharCode(i));
 */
