import React from "react";
import "./DestinationList.css";
import { Destination } from "../destination/Destination";

export const DestinationList = (props) => {
  const { destinations = [] } = props;
  return (
    <div>
      {destinations.map((destination, index) => (
        <div key={index}>
          <Destination destination={destination} />
        </div>
      ))}
    </div>
  );
};
