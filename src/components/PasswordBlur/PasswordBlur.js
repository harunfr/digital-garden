import React, { useState } from "react";
import bike from "./images/bike.jpg";

const PasswordBlur = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
    console.log(typeof e.target.value);
  };

  return (
    <div className="password-blur-container">
      <div
        className="password-blur-background"
        style={{
          backgroundImage: `url(${bike})`,
          filter: `blur(${20 - ((password?.length || 0) * 20) / 8}px)`,
        }}
      ></div>
      <form className="password-blur-form">
        <div>Password Length: {password.length}</div>

        <div>Image Password Strength</div>
        <div>Change the password to see the effect</div>
        <label>Email:</label>
        <br />
        <input type="email" />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" value={password} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordBlur;
