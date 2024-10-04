import React from "react";
import "./PricingList.css";
import { PricingCard } from "../pricing-card";

export const PricingList = (props) => {
  const { packs = [] } = props;
  return (
    <div id="pack-container">
      {packs.map((pack, index) => (
        <div key={index}>
          <PricingCard pack={pack} />
        </div>
      ))}
    </div>
  );
};
