// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
});

module.exports = model('users',myschema);