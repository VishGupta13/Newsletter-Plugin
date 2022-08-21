const express= require("express");
const router = express.Router();
const Model = require("../models/usermodel");

router.post("/add",(req,res)=>{
    const formdata = req.body;
    console.log(req.body);
    // res.send("request processed in user router");

    //create opertion
    new Model(formdata)
    .save()
    .then((result) => {
        console.log(result);
        res.json(200);
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

router.get("/checkemail/:email", (req, res) => {
  // to fetch client data from get request
  console.log(req.params.email)

  Model.findOne({ email: req.params.email })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.delete("/delete/:userid", (req, res) => {
  Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.put("/update/:userid", (req, res) => {
  Model.findByIdAndUpdate(req.params.userid, req.body, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.post('/authenticate', (req, res) => {
  const formdata = req.body;
  Model.findOne({email: formdata.email, password: formdata.password})
  .then((result) => {
      console.log(result);
      if(result) {
          console.log('login success');
          res.json(result);
      }
      else {
          console.log('login failed');
          res.status(400).json({message: 'login failed'});
      }
      
})
})

module.exports= router;