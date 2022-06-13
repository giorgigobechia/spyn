const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const bp = require("body-parser");
const db = require("./connection/dbConnection");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const CreateBookingRoute = require("./routes/CreateBookingRoute");
const UploadFileRoute = require("./routes/UploadFileRoute");
const FiltersRoute = require("./routes/FiltersRoute");
const SignUpRoute = require("./routes/SignUpRoute");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
//API TESTING
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/booking", FiltersRoute);
//UPLOAD IMAGES
app.use("/uploadFile", UploadFileRoute);

//CREATE BOOKING AND GET BOOKING DATA THIS (POST,GET)
app.use("/createBooking", CreateBookingRoute);

//REGISTRATION

app.use("/sign-up", SignUpRoute);

app.post("/sign-in", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * from users where username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ message: "Wrong username/password combination!" });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "Sorry user doesn't exist" });
      }
    }
  );
});

//START SERVER (PORT AS WELL)
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.resolve(__dirname, "../sports/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../sports/build", "index.html"));
});
