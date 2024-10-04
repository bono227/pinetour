import React from "react";
import "./Footer.css";
import { PineTourFooter } from "../../assets/PineTourFooter";
import { InstagramButton } from "../../assets/InstagramButton";
import { FacebookButton } from "../../assets/FacebookButton";

export const Footer = () => {
  return (
    <div id="footer-container">
      <PineTourFooter />
      <div id="social">
        <InstagramButton />
        <FacebookButton />
      </div>
    </div>
  );
};
