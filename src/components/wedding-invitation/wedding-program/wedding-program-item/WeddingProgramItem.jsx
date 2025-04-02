import React from "react";

import "./WeddingProgramItem.css";
const WeddingProgramItem = ({ time, title }) => {
  return (
    <div className="wedding-program-item">
      <div className="icon">O</div>

      <div className="desc">
        <p>{title}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default WeddingProgramItem;
