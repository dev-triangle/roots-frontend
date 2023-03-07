import React from "react";
import { Card } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./PlaceDetailPg.css";
const useStyles = makeStyles({
  card: {
    backgroundColor: 'transparent', // set the background color to transparent
    border: 'none',
    color:"#ffff",
  },
});

const GuideCard = ({ gender, name, desc, age, contact, addres }) => {
  // useEffect(())
  const guideCardClasses = useStyles();
  if (gender === "Male") {
    return (
      <div data-aos="zoom-in">
      <Card className={guideCardClasses.card}>
        <div className="guide__card_main">
          <img className="guide_display_image"
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
      </div>
    );
  } else {
    return (
      <Card className={guideCardClasses.card}>
        <div className="guide__card_main">
          <img className="guide_display_image"
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
