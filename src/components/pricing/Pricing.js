import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <h4>Pricing</h4>
      <h2>Pricing of Our Agency</h2>
      <div id="pack-container">
        <div className="pack-box">Starter pack</div>
        <div className="pack-box">Luxury pack</div>
      </div>
    </div>
  );
};
