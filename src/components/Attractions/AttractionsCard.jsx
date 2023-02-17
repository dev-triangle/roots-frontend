import React from "react";
import "./Attractions.css";
const AttractionsCard = ({attractImage,attractName,attractDesc}) => {
  return (
    <div>
      <div className="attractions__flip-card" tabIndex="0">
        <div className="attractions__flip-card-inner">
          <div className="attractions__flip-card-front" style={{backgroundImage: `url(${attractImage})` }}>
            <h3>{attractName}</h3>
          </div>
          <div className="attractions__flip-card-back">
            <h3>{attractDesc}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionsCard;
