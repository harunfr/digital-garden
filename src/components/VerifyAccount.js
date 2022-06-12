import React, { useEffect, useRef, useState } from "react";

const VerifyAccount = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  // const currentFocus = useRef(1)
  const [currentFocus, setCurrentFocus] = useState(1);
  const [visibleValidate, setVisibleValidate] = useState(0.3);
  const opacityVal = 0.3;

  function handleChange() {
    if (currentFocus <= 6) {
      setCurrentFocus(currentFocus + 1);
    }
    // console.log(input6)
  }

  function handleDelete(e) {
    const backSpaceKeyCode = 8;

    if (e.keyCode === backSpaceKeyCode && currentFocus > 0) {
      setCurrentFocus(currentFocus - 1);
    }
  }

  useEffect(() => {
    if (currentFocus === 1) {
      input1.current.focus();
    } else if (currentFocus === 2) {
      input2.current.focus();
    } else if (currentFocus === 3) {
      input3.current.focus();
    } else if (currentFocus === 4) {
      input4.current.focus();
    } else if (currentFocus === 5) {
      input5.current.focus();
    } else {
      input6.current.focus();
    }
    if (currentFocus === 7 && input6.current.value) {
      console.log("aaaaaaaaaaaaaaaaaaaa");
      setVisibleValidate(1);
    } else {
      setVisibleValidate(0.3);
    }
    console.log({ currentFocus });
  }, [currentFocus]);

  console.log("I am rendered.");

  return (
    <div>
      <input
        ref={input1}
        onChange={handleChange}
        onKeyDown={handleDelete}
        autoFocus
        type="text"
        className="pin-input"
      ></input>
      <input
        ref={input2}
        onChange={handleChange}
        onKeyDown={handleDelete}
        type="text"
        className="pin-input"
      ></input>
      <input
        ref={input3}
        onChange={handleChange}
        onKeyDown={handleDelete}
        type="text"
        className="pin-input"
      ></input>
      <input
        ref={input4}
        onChange={handleChange}
        onKeyDown={handleDelete}
        type="text"
        className="pin-input"
      ></input>
      <input
        ref={input5}
        onChange={handleChange}
        onKeyDown={handleDelete}
        type="text"
        className="pin-input"
      ></input>
      <input
        ref={input6}
        onChange={handleChange}
        onKeyDown={handleDelete}
        type="text"
        className="pin-input"
      ></input>
      <br />
      <button style={{ opacity: visibleValidate }} className="pin-btn">
        Validate Your PIN
      </button>
    </div>
  );
};
export default VerifyAccount;

/**
 * there is little work left here in this component.
 * when last input focused, entering input then deleting action doesn't work correctly.
 *
 */
