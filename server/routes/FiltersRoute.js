const express = require("express");
const router = express.Router();
const db = require("../connection/dbConnection");


router.get(`/`,(req,res) => {
      console.log(req.query.surface, 'THIS IS QUERRY FROM BACKeND')
      const dbQuery = 'SELECT * ' + 
      'FROM `activityInfo` ' +
      'WHERE `surface` = ?';
      if (req.query.surface.includes("artificial")) {
        db.query(dbQuery,["artificial"],(err,result) => {
          if (err) {
            console.log(err)
          }else{
            res.send(result)
          }
        })
       console.log("artificial")
      } else if(req.query.surface.includes("natural")){
        db.query(dbQuery,["natural"],(err,result) => {
          if (err) {
            console.log(err)
          } else {
            res.send(result)
          }
        })
       console.log("natural")
        
      }else{
        db.query("SELECT * FROM activityInfo",(err,result) => {
          if (err) {
            console.log(err)
          }else{
            res.send(result)
          }
        })
      }
    // if (req.query = "artificial") {
    //   db.query(query,["artificial"],(err,result) => {
    //     console.log(err)
    //       res.send(result)
    //   })
    // }else if(req.query = "natural"){
    //   db.query(query,["natural"],(err,result) => {
    //     console.log(err)
    //       res.send(result)
    //   })
    // }else if(req.query = ""){
    //   db.query(query,[""],(err,result) => {
    //     console.log(err)
    //       res.send("THERE IS NO MESSAGE")
    //   })
    // }else{
    //   res.send("NOTHING")
    // }

  });
  

  module.exports = router;