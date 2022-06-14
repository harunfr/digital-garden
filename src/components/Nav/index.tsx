import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgChevronDoubleLeftO } from "react-icons/cg";
import { IconContext } from "react-icons";

import "./styles.css";
import CurrentApps from "./AppsData";

const Nav = (): JSX.Element => {
  const [isNavActive, setIsNavActive] = useState(true);

  return (
    <nav
      className={`${
        isNavActive ? "navigation-wrapper" : "navigation-wrapper hidden"
      }`}
    >
      <div
        className="hide-nav-btn"
        onClick={() => setIsNavActive(!isNavActive)}
      >
        &gt;&gt;
      </div>
      <ul className="cards">
        {CurrentApps.map(({ name, status, path }, index) => {
          return (
            <li key={index}>
              <Link
                to={path}
                className="card-container"
                onClick={() => setIsNavActive(false)}
              >
                <h2 className="app-name">{name}</h2>
                {status === true ? (
                  <div className="finished" />
                ) : (
                  <div className="not-ready" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
