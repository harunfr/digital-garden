import React from "react";

import "./styles.css";

import CurrentApps from "./AppsData";

const Catalog = (): JSX.Element => (
  <div className="cards">
    {CurrentApps.map(({ name, status }, index) => {
      return (
        <div key={index} className="card-container">
          <div className="app-name">{name}</div>
          {status === true ? (
            <div className="finished" />
          ) : (
            <div className="not-ready" />
          )}
        </div>
      );
    })}
  </div>
);

export default Catalog;
