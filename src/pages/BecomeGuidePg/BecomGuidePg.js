import React, { useEffect, useState } from "react";
import "./BecomGuidePg.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import BecomeGuideForm from "./BecomeGuideForm";
import { MenuItem,Select, InputLabel,FormControl} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
const BecomGuidePg = () => {
  const [placeId,setPlaceId]=useState()
  const[places,setPlaces]=useState([]);
  const handleChange=()=>{

  }
  useEffect(()=>{
    axios.get(`${baseUrl}/places/`).then((res)=>{
      setPlaces(res.data);
    })
  },[])
  return (
    <MainLayout>
      <div className="guide__page__main_container">
        <img src="" alt="" className="guide__vector" />
        <div className="form__part__guide">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Place</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={placeId}
              label="placeId"
              onChange={handleChange}
            >
              {places.map((place,index)=>{
                return(
                  <MenuItem key={index} value={place.id} onChange={(e)=>{
                    setPlaceId(e.target.value)
                  }}>{place.place_name}</MenuItem>
                )
              })}
              
            </Select>
          </FormControl>
          <BecomeGuideForm  placeId={placeId}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default BecomGuidePg;
