import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingPage() {
  const [bookings, setBookings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seletedBooking, setSelectedBooking] = useState(null);

  const handleSelect = (selected) => {
    setSelectedBooking({ ...selected });
    setIsModalVisible(true);
    axios
      .get("/createBooking", {
        responseType: "json",
      })
      .then(function (response) {
      });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    axios
      .get("/createBooking", {
        responseType: "json",
      })
      .then(function (response) {
        setBookings(response.data);
        console.log(seletedBooking?.street);
      });
  }, []);
  return (
    <div>
      <button onClick={handleSelect}>handleSelect</button>
    </div>
  );
}

export default BookingPage;
