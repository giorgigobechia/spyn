import React from "react";
import "./bookingsCard.css";
function BookingsCard(props) {
  return (
    <div className="bookings-card-wrapper">
      <div
        className="bookings-card-top-part"
        style={{
          backgroundImage: `url(${props.background})`,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      ></div>
      <div className="bookings-card-info">
        <div className="bookings-card-info-left">
          <p className="bookings-card-name">{props.bookingCardName}</p>

          <p className="bookings-card-street">{props.bookingCardStreet}</p>
        </div>
        <div className="bookings-card-info-right">
          <p className="bookings-card-info-right-price">
            {props.bookingCardPrice + "₾"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingsCard;
