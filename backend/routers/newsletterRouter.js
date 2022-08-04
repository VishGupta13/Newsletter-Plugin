const Model = require('../model/newsLetter');
const router =  require('express').Router();

router.post('/add',(req,res) => { 
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        console.log('data saved');
        res.json(result);

    }).catch((err) => {
        console.error(err);
        res.json(err);

    });

})

router.get('/getall', (req, res) => {
Model.find({})
    .then((result) => {
        console.log(result);
        setTimeout(() => {
            res.json(result);
            
        }, 2500);
       

    }).catch((err) => {
        console.error(err);
        res.json(err);

    });
// res.send('response achieved ')
});

router.get('/checkemail/:email', (req, res) => {

// to fetch client data from get request
console.log(req.params.email);

Model.findOne({ email: req.params.email })
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.get('/getbyid/:id', (req, res) => {
Model.findById(req.params.id)
    .then((result) => {
        res.json(result);


    }).catch((err) => {
        console.error(err);
        res.json(err);

    });
})

router.delete('/delete/:userid', (req, res) => {
Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        console.error(err);
        res.json(err);

    });
})

router.put('/update/:userid', (req, res) => {
Model.findByIdAndUpdate(req.params.userid, req.body, {new :true})
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        console.error(err);
        res.json(err);

    });
})


module.exports = router;