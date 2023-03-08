import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import "./PlaceDetailPg.css";
import ActivityCard from "./ActivityCard";
import FestivalCard from "./FestivalCard";
import GuidesSection from "./GuidesSection";
import Attractions from "../../components/Attractions/Attractions";
import Aos from "aos";
// import CustomTitle from "../../utils/CustomTitle";

const PlaceDetailPg = () => {
  let { place_id } = useParams();
  const [place, setPlace] = useState({});
  const [activities, setActivities] = useState([]);
  const [festivals, setFestivals] = useState([]);

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  useEffect(() => {
    axios.get(`${baseUrl}/festivals/`).then(
      (response) => {
        setFestivals(response.data);
      },
      (error) => {}
    );
  }, []);
  useEffect(() => {
    axios.get(`${baseUrl}/places/${place_id}/`).then(
      (response) => {
        setPlace(response.data);
      },
      (error) => {
        // console.log(error);
      }
    );
  }, [place_id]);

  useEffect(() => {
    axios.get(`${baseUrl}/activities/`).then((res) => {
      // console.log(res);
      setActivities(res.data);
    });
  }, []);
  return (
    <MainLayout>
      {/* <CustomTitle title={place.place_name}/> */}
      <div className="place__detail_page_container" >
        <div className="image_place"
        style={{ backgroundImage: `url(${place.place_image})` }}></div>
        <h1 className="place_name" data-aos="zoom-in" aos-delay="200">{place?.place_name}</h1>
       

        <div className="place__activites">
          <h2>Destinations</h2>
          <div className="destination__cards_contain" data-aos="zoom-in">
          {activities.map((activity, index) =>
            activity.place_foreign === parseInt(place_id) ? (
              <ActivityCard
                key={index}
                activityImage={activity.activity_image}
                activityName={activity.activity_name}
              />
            ) : null
          )}
          </div>
        </div>
        </div>
        

        <div className="festivals__section"  data-aos="fade-left">
          <h2>Festivals</h2>
          <div className="festivals__container">
            {festivals.map((fest, index) =>
              fest.place_foreign === parseInt(place_id) ? (
                <FestivalCard
                  key={index}
                  festDesc={fest.festival_desc}
                  festImage={fest.festival_image}
                  festName={fest.festival_name}
                />
              ) : null
            )}
          </div>
        </div>

        <Attractions/>
        <GuidesSection placeId={place_id}/>

      
    </MainLayout>
  );
};

export default PlaceDetailPg;
