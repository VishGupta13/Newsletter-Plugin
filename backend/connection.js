const mongoose = require('mongoose');

const url = "mongodb+srv://visgupta13:vishalgupta13@cluster0.7kur5.mongodb.net/NewsletterPlugin2?retryWrites=true&w=majority"


mongoose.connect(url)
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;