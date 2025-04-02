import React from "react";
import CountdownTimer from "../../UI/count-down-timer/CountdownTimer";
import NameSection from "../../UI/name-section/NameSection";
import Date from "../../UI/date/Date";

import "./TopImage.css";
const TopImage = ({ src, alt }) => (
  <div className="top-image">
    <NameSection />
    <Date />
    {/* <CountdownTimer /> */}
  </div>
);

export default TopImage;
