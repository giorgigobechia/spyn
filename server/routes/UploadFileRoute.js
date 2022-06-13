const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "server/public/uploads" });
const express = require("express");
const router = express.Router();
const db = require("../connection/dbConnection");
const fs = require("fs");


router.post("/", upload.single("avatar"), (req, res) => {
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;
  fs.rename(
    `server/public/uploads/${req.file.filename}`,
    `server/public/uploads/${newFileName}`,
    function () {}
  );
  db.query(
    "UPDATE activityinfo SET image = ? where id = ?",
    [newFileName, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

module.exports = router;
