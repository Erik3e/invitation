import React from "react";
import { programData } from "../../../config";
import WeddingProgramItem from "./wedding-program-item/WeddingProgramItem";

import "./WeddingProgram.css";
const WeddingProgram = () => {
  return (
    <div className="wedding-program">
      <h1 className="wedding-program-item">Օրվա ծրագիր</h1>

      {programData &&
        programData.map((item) => (
          <WeddingProgramItem key={item.id} {...item} />
        ))}
    </div>
  );
};

export default WeddingProgram;
