import React, { useEffect, useState } from "react";

const Checkboxes = () => {
  const [goodChecked, setGoodChecked] = useState(false);
  const [cheapChecked, setCheapChecked] = useState(false);
  const [fastChecked, setFastChecked] = useState(false);
  const [lastChecked, setLastChecked] = useState("");

  // solution 1, let them be checked altogether then uncheck appropriate one.
  useEffect(() => {
    if (goodChecked && cheapChecked && fastChecked) {
      if (lastChecked === "good") {
        setFastChecked(false);
      }
      if (lastChecked === "cheap") {
        setGoodChecked(false);
      }
      if (lastChecked === "fast") {
        setCheapChecked(false);
      }
    }
  }, [goodChecked, cheapChecked, fastChecked]);

  function handleOnChange(option, e) {
    setLastChecked(option);

    if (option === "good") {
      setGoodChecked(!goodChecked);
    } else if (option === "cheap") {
      setCheapChecked(!cheapChecked);
    } else if (option === "fast") {
      setFastChecked(!fastChecked);
    }
  }
  // end solution 1

  // solution 2: don't let all of them checked by controling the flow.
  // First uncheck one of them then check clicked one.

  // function handleOnChange(option, e) {
  //   console.log({option})
  //   if (option === 'good' && cheapChecked && fastChecked) {
  //     setFastChecked(false)
  //     setGoodChecked(true)
  //   } else if (option === 'good') {
  //     setGoodChecked(!goodChecked)
  //   }
  //   if (option === 'cheap' && goodChecked && fastChecked) {
  //     setGoodChecked(false)
  //     setCheapChecked(true)
  //   } else if (option === 'cheap') {
  //     setCheapChecked(!cheapChecked)
  //   }
  //   if (option === 'fast' && cheapChecked && goodChecked) {
  //     setCheapChecked(false)
  //     setFastChecked(true)
  //   } else if (option === 'fast') {
  //     setFastChecked(!fastChecked)
  //   }

  // }

  // end solution 2

  return (
    <div>
      <input
        checked={goodChecked}
        onChange={(e) => handleOnChange("good", e)}
        type="checkbox"
      />
      Good
      <br />
      <input
        checked={cheapChecked}
        onChange={(e) => handleOnChange("cheap", e)}
        type="checkbox"
      />
      Cheap
      <br />
      <input
        checked={fastChecked}
        onChange={(e) => handleOnChange("fast", e)}
        type="checkbox"
      />
      Fast
    </div>
  );
};

export default Checkboxes;
