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
        console.log(response)
      setAttracts(response.data);
    });
  });
  return (
    <div className="attractions__section">
      <h1>Attractions</h1>
      <div className="atrcations__cards_container">
        {attracts.map((attract, index) =>
          attract.place_foreign === parseInt(place_id) ? (
            <AttractionsCard
              key={index}
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
