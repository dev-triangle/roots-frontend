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
        console.log(error);
      }
    );
  }, [place_id]);

  useEffect(() => {
    axios.get(`${baseUrl}/activities/`).then((res) => {
      console.log(res);
      setActivities(res.data);
    });
  }, []);
  return (
    <MainLayout>
      <div className="place__detail_page_container">
        <h1>{place.place_name}</h1>
        <div className="place__detail_content">
          <img
            className="place__image"
            src={place.place_image}
            alt="place_image"
          />
          <p>{place.place_description}</p>
        </div>

        <div className="place__activites">
          <h1>Destinations</h1>

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
          <h1>Festivals</h1>
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
        <GuidesSection placeName={place.place_name}/>

      </div>
    </MainLayout>
  );
};

export default PlaceDetailPg;
