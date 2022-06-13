import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/bookingPage/BookingPage";
import Bookings from "./components/bookings/Bookings";
import CreateBookingPage from "./components/createBookingPage/CreateBookingPage";
import SignIn from "./components/registration/sign-in/SignIn";
import SignUp from "./components/registration/sign-up/SignUp";
import Layout from "./layout/Layout";
function App() {
  // const [data, setData] = useState("");
  // const [val, setVal] = useState("");
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  // const getValuesFromINP = (e: any) => {
  //   setVal(e.target.value);
  //   console.log(e.target.value, "😀");
  // };
  // console.log(val, "😋");
  // const onSubmit = () => {
  //   axios
  //     .post("/user", {
  //       name: val,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/createBooking" element={<CreateBookingPage />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <p>{!data ? "Loading..." : data}</p>
<input type="text" onChange={getValuesFromINP} />
<button onClick={onSubmit}>Send TO database</button> */
}
