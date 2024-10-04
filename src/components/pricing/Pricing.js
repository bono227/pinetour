import React from "react";
import { PricingList } from "./pricing-list/PricingList";
import "./Pricing.css";
import { packs } from "../../data";

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <h4>PRICING</h4>
      <h2>
        Pricing of
        <br /> Our Agency
      </h2>
      <PricingList packs={packs} />
    </div>
  );
};
