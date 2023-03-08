import React, { useEffect, useState } from "react";
import "./Attractions.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import AttractBookDial from "../AttractBookDial/AttractBookDial";
import AttractVDDialog from "../AttractVDDialog/AttractVDDialog";
const AttractionsCard = ({
  attractImage,
  attractName,
  attractDesc,
  attractId,
  attractPhno,
  placeId,
}) => {
  const[open,setOpen]=useState(false)
  const[openDet,setOpenDet]=useState(false)
  const handleCloseDet=()=>{
    setOpenDet(false);
  }
  const [userId, setUserId] = useState();
  const handleClose=()=>{
    setOpen(false);
  }
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then(
      (response) => {
        setUserId(response.data.id);
      },
      (error) => {}
    );
  }, []);
  const finalSubmit = () => {
    axiosInstance.post(`${baseUrl}/booking/`, {
      date: "2023-02-11",
      image: attractImage,
      place_foreign: placeId,
      attact_foreign: attractId,
      user_foreign: userId,
    }).then((res)=>{
      // console.log(res)
      if(res.status===201){
        alert('Successfully Booked');

      }
    },(error)=>{
      // console.log(error)
    })
  };
  return (
    <div className="attraction__card_body">
      <AttractVDDialog openDet={openDet} handleCloseDet={handleCloseDet} attractDesc={attractDesc}/>
      <AttractBookDial open={open} handleClose={handleClose} finalSubmit={finalSubmit}/>
      <img src={attractImage} alt=" " />
      <p>{attractName}</p>
      <p>Ph: {attractPhno}</p>
      <div className="attract__card_btns">
        <button className="att__c_btn"onClick={()=>{
          setOpen(true)
        }}>Book Now</button>
        <button onClick={()=>{
          setOpenDet(true);
        }} className="att__c_btn">View Details</button>
      </div>
    </div>
  );
};

export default AttractionsCard;
