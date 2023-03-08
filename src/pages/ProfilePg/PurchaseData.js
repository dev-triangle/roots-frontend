import React, { useState, useEffect } from "react";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import "./ProfilePg.css";
const PurchaseData = () => {
  const [purchases, setPurchases] = useState([]);
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then((response) => {
      setUserId(response.data.id);
    });
  });
  useEffect(() => {
    axiosInstance
      .get(`${baseUrl}/purchases/`)
      .then((response) => setPurchases(response.data));
  }, []);
  return (
    <div className="purchase_section_container">
      <h1 className="profile__pg_title">Purchases</h1>
      <div className="registered__card">
        {purchases.map((purchase, index) =>
          purchase.user_foreign === parseInt(userId) ? (
            <div className="reg__cardbody" key={index}>
              <div className="reg__booked_content">
                <p className="reg__content_p">
                  Purchase ID: <span>{purchase.id}</span>
                </p>
                <p className="reg__content_p">
                  Date: <span>{purchase.date_of_purchase}</span>
                </p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default PurchaseData;
