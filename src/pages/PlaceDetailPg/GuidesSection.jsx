import React, { useEffect, useState } from "react";
import "./PlaceDetailPg.css";
import GuideCard from "./GuideCard";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
const GuidesSection = ({ placeId }) => {
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/guides/`).then((response) => {
      setGuides(response.data);
    });
  }, []);
  return (
    <div className="guide__main_body">
      <h1>Guides</h1>
      <div className="guides__cards">
        {guides.map((guide, index) =>
          guide.place_foreign === parseInt(placeId) ? (
            <GuideCard key={index} gender={guide.gender} name={guide.name} desc={guide.desc} age={guide.age} contact={guide.contact} address={guide.address} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default GuidesSection;
