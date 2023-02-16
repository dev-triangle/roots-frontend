import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import "./PlaceDetailPg.css";
import ActivityCard from "./ActivityCard";
const PlaceDetailPg = () => {
  let { place_id } = useParams();
  const [place, setPlace] = useState({});
  const [activities, setActivities] = useState([]);
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
          <img src={place.place_image} alt="place_image" />
          <p>{place.place_description}</p>
        </div>

        <div className="place__activites">
          <h1>Activities</h1>

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
    </MainLayout>
  );
};

export default PlaceDetailPg;
