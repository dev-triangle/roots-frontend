import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/urls";
import "./Attractions.css";
import axios from "axios";
import AttractionsCard from "./AttractionsCard";
import { useParams } from "react-router-dom";
const Attractions = () => {
  let { place_id } = useParams();
  const [attracts, setAttracts] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/attractions/`).then((response) => {
      setAttracts(response.data);
    });
  });
  return (
    <div className="attractions__section">
      <h2>Attractions</h2>
      <div className="atrcations__cards_container">
        {attracts.map((attract, index) =>
          attract.place_foreign === parseInt(place_id) ? (
            <AttractionsCard
              key={index}
              placeId={place_id}
              attractId={attract.id}
              attractPhno={attract.contact_number}
              attractImage={attract.image}
              attractName={attract.name}
              attractDesc={attract.desc}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Attractions;
