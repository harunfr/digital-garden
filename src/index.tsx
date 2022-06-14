import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import RouteSwitch from "./RouteSwitch"; // 14

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
