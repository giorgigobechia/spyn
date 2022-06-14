import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookingsCard from "./bookingsCard/BookingsCard";
import "./bookings.css";
import {
  Button,
  Col,
  Divider,
  Row,
  Segmented,
  TreeSelect,
  Select,
  Input,
} from "antd";
const { TreeNode } = TreeSelect;
const { Option } = Select;

function Bookings() {
  const [bookingsFilter, setBookingsFilter] = useState([]);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("surface"));

  useEffect(() => {
    console.log("asdasd");
    const surface = searchParams.get("surface");
    let params = "";

    if (surface) {
      params = `?surface=${surface}`;
    }
    axios.get(params).then(function (response) {
      setBookingsFilter(response.data);
    });
  }, [searchParams]);

  const filterInputs = () => {
    setSearchParams({ ...searchParams, surface: value });
    axios.get(`?surface=${value}`).then(function (response) {
      console.log(response, `surface=${value}`);
      setBookingsFilter(response.data);
    });
    console.log(`surface=${value}`);
  };
  console.log(bookingsFilter, "THIS IS MESSAGE FROM BOOKINGS FILTER ");
  return (
    <div>
      <div className="filters-container">
        <div className="filters-container-left">
          <Input.Group compact>
            <Select defaultValue="საფარი" onChange={(value) => setValue(value)}>
              <Option value="natural">ბუნებრივი</Option>
              <Option value="artificial">ხელოვნური</Option>
            </Select>
          </Input.Group>
          <Button onClick={filterInputs}>გაფილტრე!</Button>

          <div className="invisible"></div>
        </div>
        <div className="filters-container-right">
          <Row
            style={{
              width: "100%",
              alignSelf: "flex-start",
            }}
            gutter={{
              xs: 8,
              sm: 9,
              md: 8,
              lg: 18,
            }}
          >
            {bookingsFilter?.map((filteredBooking) => {
              return (
                <Col
                  className="gutter-row"
                  md={12}
                  lg={12}
                  sm={12}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <BookingsCard
                    background={`uploads/` + filteredBooking.image}
                    bookingCardName={filteredBooking.name}
                    bookingCardStreet={filteredBooking.street}
                    bookingCardPrice={filteredBooking.price}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Bookings;

// {
//   bookingsFilter?.map((filteredBooking) => {
//     return (
//       <BookingsCard
//       background={`uploads/` + filteredBooking.image}
//       bookingCardName={filteredBooking.name}
//       bookingCardStreet={filteredBooking.street}
//       bookingCardPrice={filteredBooking.price}
//     />
//     )
//   })
// }
