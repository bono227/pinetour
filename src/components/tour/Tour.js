import React from "react";
import "./Tour.css";
import { DestinationList } from "./destination-list";
import { destinations } from "../../data";

export const Tour = () => {
  return (
    <div id="tour-container">
      <div id="tour-text">
        <h4>TOURS | 6 DAYS</h4>
        <h2>Destination of Our Agency</h2>
        <DestinationList destinations={destinations} />
      </div>
      <div id="tour-map">
        <img src="./images/map.png" alt="pic" />
      </div>
    </div>
  );
};
