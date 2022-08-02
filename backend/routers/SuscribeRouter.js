const express = require("express");
const router = express.Router();
const Model = require("../models/SubscribeModal");

router.post("/sscrib",(req,res)=>{
    const data = req.body;
    console.log(req.body);
    // res.send("request processed in suscribe router");

    //create opertion
    new Model(data)
    .save()
    .then((result) => {
        console.log("data saved");
        res.json(result);
    }).catch((err) => {
        console.error("error");
        res.json(err);
    });
});

//this is used for feched all user data
router.get("/getall", (req, res) => {
    Model.find({})
      .then((result) => {
        console.log("user data fetched");
        res.json(result);
      })
      .catch((err) => {
        console.error("error");
        res.json(err);
      });
  });
router.get("/getbyownerid/:ownerid", (req, res) => {
    Model.find({owner:req.params.ownerid})
      .then((result) => {
        console.log("user data fetched");
        res.json(result);
      })
      .catch((err) => {
        console.error("error");
        res.json(err);
      });
  });
  router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.json(err);
      });
  });

module.exports=router;