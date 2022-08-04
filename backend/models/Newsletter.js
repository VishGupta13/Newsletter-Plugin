// Owner form for logging in 
const {Schema, model, Types} = require('../connection');


const myschema = new Schema({
    owner:{type : Types.ObjectId, ref : 'users'},
    content:String,
    schedule : String,
    createdAt : Date
});

module.exports = model('newsletter',myschema);