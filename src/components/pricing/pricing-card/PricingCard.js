import React from "react";
import "./PricingCard.css";

export const PricingCard = (props) => {
  const { pack } = props;
  console.log({ pack });
  return (
    <div id="pack-card-container">
      <h3>{pack.name}</h3>
      <ul>{pack.included.trip && <li>Trip</li>}</ul>
      <ul>{pack.included.hotel && <li>Hotel</li>}</ul>
      <ul>{pack.included.breakfast && <li>BreakFast</li>}</ul>
      <ul>{pack.included.lunch && <li>Lunch</li>}</ul>
      <ul>{pack.included.dinner && <li>Dinner</li>}</ul>
      <ul>{pack.included.flight && <li>Flight</li>}</ul>
      <ul>{pack.included.cruiseTrip && <li>Cruise Trip</li>}</ul>
      <div>
        <p>{pack.price}$</p>
      </div>
    </div>
  );
};
