import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const TestimItem = (props) => {
  return (
    <div className="testim-wrapper">
      <div
        onAnimationEnd={props.handleSwitch}
        className="testim-loading-bar"
      ></div>

      <div className="testim">
        <span className="testim-big-quote"> "</span>
        {props.testim}
        <span className="testim-big-quote"> "</span>
      </div>

      <div className="testim-user">
        <img className="testim-pic" src={props.src} />
        <div className="testim-name">
          {props.firstName} {props.lastName}
        </div>
        <div className="testim-username">{props.userName}</div>
      </div>
    </div>
  );
};
//  {props.name.first} {props.name.last}
const TestimonialSwitch = () => {
  const [data, setData] = useState([]);
  const [animation, setAnimation] = useState(false);
  const [currentTestim, setCurrentTestim] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api?results=10");
      const fetcedhUsers = await response.json();
      let userData = fetcedhUsers.results;

      const testimonialResponse = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=10"
      );
      const testimonialsData = await testimonialResponse.json();

      const userDataJoined = userData.map((user, i) => {
        user.testim = testimonialsData[i];
        return user;
      });
      // console.log(userDataJoined[0].name.first)

      setData(userDataJoined);
    };
    fetchData();
  }, []);

  const handleSwitch = () => {
    console.log("animation ended");
    setCurrentTestim((currentTestim + 1) % data.length);
  };

  return (
    <>
      {!data
        ? "Fetching Data.."
        : data
            .slice(currentTestim, currentTestim + 1)
            .map((user) => (
              <TestimItem
                key={uuid()}
                handleSwitch={handleSwitch}
                testim={user.testim.slice(0, 100)}
                src={user.picture.medium}
                firstName={user.name.first}
                lastName={user.name.last}
                userName={user.login.username}
              />
            ))}
    </>
  );
};

export default TestimonialSwitch;
