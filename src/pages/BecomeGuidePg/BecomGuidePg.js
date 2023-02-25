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
      {/* <div className="guide__page__main_container">
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
      </div> */}

<div className='guide_main'>
      
      <div className='guide_img'></div>

      <div className='g_container'>
            <p className='g_heading'>Book With Us Today</p>

            <div className='g_dot1'></div> <p className='gl_dot1'>One way</p>
            <div className='g_dot2'></div><p className='gl_dot2'>Round trip</p>

            <input className='gu_input1' type='text'  placeholder='Leaving from...' required/>
            <input className='gu_input2' type="text"   placeholder='Going to...' required/>

            <input className='gu_input3' type="text" onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")} placeholder='Depart' required/>
            <input className='gu_input4' type="text" onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}   placeholder='Return' required/>

            <input className='gu_input5' type="number"   placeholder='Passengers' required/>
            <input className='gu_input6' type="text"   placeholder='Class' required/>
          
            <div className='g_button' type='submit'>Search Available Flights</div> 
      </div>
   </div>
    </MainLayout>
  );
};

export default BecomGuidePg;
