import React, { useEffect, useState } from "react";
import "./main.css";
import BookingCard from "./bookingCard/BookingCard";
import axios from "axios";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import BookingCardModal from "./bookingCardModal/BookingCardModal";
import { Button, Modal } from "antd";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
  height: "450px",
  paddingTop: "0px",
  paddingRight: "0px",
  paddingLeft: "0px",
  marginLeft: "0px",
  margiRight: "0px",
  background: "none",
  width: "350px",
  color: "white",
  boxShadow: "none",
}));

function Main() {
  const [bookings, setBookings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleSelect = (selected) => {
    setSelectedBooking({ ...selected });
    setIsModalVisible(true);
    axios
      .get("/createBooking", {
        responseType: "json",
      })
      .then(function (response) {});
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
      });
  }, []);

  return (
    <div className="main">
      <Modal
        title={selectedBooking?.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {console.log(
          selectedBooking?.image == null ? "NULL" : selectedBooking?.image,
          "💕"
        )}
        <p>ადგილმდებარეობა: {selectedBooking?.street}</p>
        <p>ზომა(მეტრი): {selectedBooking?.size}</p>
        <img
          src={`uploads/` + selectedBooking?.image}
          alt=""
          style={{ width: "100%", height: "280px" }}
        />
        <p>
          საფარი:{" "}
          {selectedBooking?.surface == "natural" ? "ბუნებრივი" : "ხელოვნური"}
        </p>
        <p>
          გადახურვა: {selectedBooking?.covered == "open" ? "ღია" : "დაკეტილი"}
        </p>
        <p>მოთამაშეების რაოდენობა: {selectedBooking?.numberOfPlayers}</p>
        <p>
          გასახდელი:{" "}
          {selectedBooking?.dressing == true ? (
            <FcCheckmark />
          ) : (
            <AiOutlineClose style={{ fill: "red" }} />
          )}
        </p>
        <p>
          პარკინგი:{" "}
          {selectedBooking?.parking == true ? (
            <FcCheckmark />
          ) : (
            <AiOutlineClose style={{ fill: "red" }} />
          )}
        </p>
        <p>
          საგულშემატკვირო სივრცე:{" "}
          {selectedBooking?.fanSpace == true ? (
            <FcCheckmark />
          ) : (
            <AiOutlineClose style={{ fill: "red" }} />
          )}
        </p>
        <p>
          საშხაპე:{" "}
          {selectedBooking?.shower == true ? (
            <FcCheckmark />
          ) : (
            <AiOutlineClose style={{ fill: "red" }} />
          )}
        </p>
        <h1>საათობრივი ფასი: {selectedBooking?.price + "₾"}</h1>
      </Modal>
      <Container fixed style={{ width: "150vh" }}>
        <Box
          sx={{
            bgcolor: "none",
            height: "100vh",
            width: "100%",
            boxShadow: "0px 0px white",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2, sm: 5 }}
            columns={{ xxl: 6, xl: 9, lg: 6, sm: 4, md: 4 }}
            style={{ marginLeft: "0px", marginRight: "7px" }}
          >
            {bookings?.map((booking) => {
              return (
                <Grid
                  item
                  xxl={2}
                  xl={3}
                  lg={2}
                  sm={4}
                  md={2}
                  key={booking.id}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    boxShadow: "0px",
                  }}
                >
                  <Item
                    key={booking.id}
                    onClick={() => handleSelect(booking)}
                    style={{ boxShadow: "0px" }}
                  >
                    <BookingCard
                      key={booking.id}
                      background={`uploads/` + booking.image}
                      name={booking.name}
                      street={booking.street}
                      price={booking.price}
                    />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Main;
