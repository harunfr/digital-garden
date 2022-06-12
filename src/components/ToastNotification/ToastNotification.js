import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const Notification = (props) => (
  <div onAnimationEnd={props.handleAnimationEnd} className="tn-notification">
    Notification: {props.notificationNumber}
  </div>
);

const ToastNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const handleClick = () => {
    setNotifications(notifications.concat(1));
  };
  const handleAnimationEnd = () => {
    // const newNotifications = [...notifications].splice(notifications.length - 1, 1)
    setNotifications(notifications.slice(0, notifications.length - 1));
  };

  return (
    <div className="tn-wrapper">
      <button onClick={handleClick} className="tn-btn">
        Show Notification
      </button>
      <div className="tn-notification-container">
        {/* <div className="tn-notification">Notification 1</div>
        <div className="tn-notification">Notification 2</div>
        <div className="tn-notification">Notification 2</div> */}
        {notifications.map((notification) => (
          <Notification
            handleAnimationEnd={handleAnimationEnd}
            key={uuid()}
            notificationNumber={uuid()}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastNotification;
