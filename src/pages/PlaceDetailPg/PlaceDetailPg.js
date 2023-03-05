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

const PlaceDetailPg = () => {
  let { place_id } = useParams();
  const [place, setPlace] = useState({});
  const [activities, setActivities] = useState([]);
  const [festivals, setFestivals] = useState([]);

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
      <div className="place__detail_page_container" >
        <div className="image_place"
        style={{ backgroundImage: `url(${place.place_image})` }}></div>
        <h1 className="place_name">{place.place_name}</h1>


        <div className="place__activites">
          <h2>Destinations</h2>

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

        <div className="festivals__section">
          <h2>Festivals</h2>
          <div className="festivals__container">
            {festivals.map((fest, index) =>
              fest.place_foreign === parseInt(place_id) ? (
                <FestivalCard
                  key={index}
                  festImage={fest.festival_image}
                  festName={fest.festival_name}
                />
              ) : null
            )}
          </div>
        </div>

        <Attractions/>
        <GuidesSection placeId={place_id}/>

      </div>
    </MainLayout>
  );
};

export default PlaceDetailPg;
