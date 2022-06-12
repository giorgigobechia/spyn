import React from "react";
import "./bookingCard.css";

function BookingCard(props) {
  return (
    <div>
      <div className="booking-card">
        <div
          className="booking-card-top"
          style={{
            backgroundImage: `url(${props.background})`,
          }}
        ></div>
        <div className="booking-card-middle">
          <p className="booking-card-name">{props.name}</p>
          <p className="booking-card-street">{props.street}</p>
        </div>
        <div className="booking-card-bottom">{props.price + "₾"}</div>
      </div>
    </div>
  );
}

export default BookingCard;
