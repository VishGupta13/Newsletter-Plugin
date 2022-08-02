const express= require("express");
const router = express.Router();
const Model = require("../models/Newslettermodel");

router.post("/form",(req,res)=>{
    const formdata = req.body;
    console.log(req.body);
    // res.send("request processed in user router");

    //create opertion
    new Model(formdata)
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



module.exports= router;