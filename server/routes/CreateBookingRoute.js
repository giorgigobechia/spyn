const express = require("express");
const router = express.Router();
const db = require("../connection/dbConnection");

router.post("/", (req, res) => {
  const {
    name,
    street,
    stadiumSize,
    surface,
    covered,
    dressing,
    parking,
    fanSpace,
    shower,
    lights,
    price,
    numberOfPlayers,
    image,
  } = req.body;
  console.log(req.body, "😎");

  db.query(
    "INSERT INTO activityInfo (name,street,size,surface,covered,dressing,parking,fanSpace,shower,light,price,numberOfPlayers,image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      street,
      stadiumSize,
      surface,
      covered,
      dressing,
      parking,
      fanSpace,
      shower,
      lights,
      price,
      numberOfPlayers,
      image,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ id: result.insertId });
        console.log(result, "💦");
      }
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * from activityInfo", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
