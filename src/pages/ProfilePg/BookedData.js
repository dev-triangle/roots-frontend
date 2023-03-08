import React, { useEffect, useState } from "react";
import "./ProfilePg.css";
import { baseUrl } from "../../utils/urls";
import axiosInstance from "../../auth/authHandler";
import { Card } from "@mui/material";
const BookedData = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/booking/`).then(
      (res) => {
        console.log(res.data);
        setBookings(res.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <div>
      <h1>Bookings</h1>
      <div className="booked__data">
        {bookings.map((booking, index) =>
          booking.user_foreign === parseInt(window.localStorage.getItem("user_id")) ? (
            <Card key={index}>
              <div className="profile__booking_card">
                <img src={booking.image} alt="" />
                <p>Booking ID: {booking.id}</p>
                <p>Booking Date: {booking.date}</p>
              </div>
            </Card>
          ) : null
        )}
      </div>
    </div>
  );
};

export default BookedData;
