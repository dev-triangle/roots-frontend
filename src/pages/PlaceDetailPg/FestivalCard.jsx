import React, { useState } from "react";
import "./PlaceDetailPg.css";
import FestivalsDialog from "../../components/FestivalsDialog/FestivalsDialog";
const FestivalCard = ({ festImage, festName, festDesc }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <FestivalsDialog
        festDesc={festDesc}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        festName={festName}
      />

      <div className="act__card 1">
        <div className="act__card_image">
          {" "}
          <img src={festImage} alt="" />
        </div>
        <div className="act__card_title title-white">
          <p>{festName}</p>
          <button
            className="att__c_btn"
            onClick={() => {
              setOpen(true);
            }}
          >
            view details
          </button>
        </div>
      </div>
    </>
  );
};

export default FestivalCard;
