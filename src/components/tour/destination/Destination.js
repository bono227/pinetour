import React from "react";
import "./Destination.css";

export const Destination = (props) => {
  const { destination } = props;
  return (
    <div id="destination-container">
      <h4>{destination.id}</h4>
      <div>
        <h5>{destination.title}</h5>
        <p>{destination.location}</p>
      </div>
    </div>
  );
};
