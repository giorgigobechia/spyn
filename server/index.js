const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const bp = require("body-parser");
const db = require("./connection/dbConnection");
const cors = require("cors");
const CreateBookingRoute = require("./routes/CreateBookingRoute");
const UploadFileRoute = require("./routes/UploadFileRoute");
const FiltersRoute = require("./routes/FiltersRoute")
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//API TESTING
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/booking', FiltersRoute)
//UPLOAD IMAGES
app.use("/uploadFile", UploadFileRoute);

//CREATE BOOKING AND GET BOOKING DATA THIS (POST,GET)
app.use("/createBooking", CreateBookingRoute);

//START SERVER (PORT AS WELL)
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




app.use(express.static(path.resolve(__dirname, "../sports/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../sports/build", "index.html"));
});
