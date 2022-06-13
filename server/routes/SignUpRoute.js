const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../connection/dbConnection");

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(username, email, password, "🤩");
  db.query(
    "SELECT * from users where username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length !== 0) {
        res.status(409).send({
          message: "Username has already taken. Please use another one",
        });
        console.log("User already exists");
      } else {
        res.status(200).send({
          message: "New Account has been created succsesfully",
        });
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }

          db.query(
            "INSERT INTO users (username,password,email) VALUES (?,?,?)",
            [
              username,
              hash,
              email,
              (err, result) => {
                console.log(err, result);
              },
            ]
          );
        });
      }
    }
  );
});

module.exports = router;
