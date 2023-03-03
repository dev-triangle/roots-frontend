import React from "react";
import { Card } from "@mui/material";
const GuideCard = ({ gender, name, desc, age, contact, addres }) => {
  if (gender === "Male") {
    return (
      <Card>
        <div className="guide__card_main">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=" "
          />
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Ph: <span>{contact}</span>
          </p>
          <p>
            Description: <span>{desc}</span>
          </p>
        </div>
      </Card>
    );
  } else {
    return (
      <Card>
        <div className="guide__card_main">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=" "
          />
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Ph: <span>{contact}</span>
          </p>
          <p>
            Description: <span>{desc}</span>
          </p>
        </div>
      </Card>
    );
  }
};

export default GuideCard;
