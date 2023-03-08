import React, { useEffect, useState } from "react";
import "./ProfilePg.css";
import { baseUrl } from "../../utils/urls";
import axiosInstance from "../../auth/authHandler";
const BookedData = () => {
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/booking/`).then((response) => {
      setBookings(response.data);
    });
  }, []);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then((response) => {
      setUserId(response.data.id);
    });
  }, []);
  return (
    <div className="bookings__done_main">
      <h1 className="profile__pg_title">Bookings</h1>
      <div className="registered__card">
        {bookings.map((booking, index) =>
          booking.user_foreign === parseInt(userId) ? (
            <div className="reg__cardbody" key={index}>
              <img className="reg__content_img" src={booking.image} alt=" " />
              <div className="reg__booked_content">
              <p className="reg__content_p">
                Booking ID: <span>{booking.id}</span>
              </p>
              <p className="reg__content_p">
                Date: <span>{booking.date}</span>
              </p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default BookedData;
