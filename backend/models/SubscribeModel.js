const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    owner:{type : Types.ObjectId, ref : 'users'},
    name:String,
    email : String,
    createdAt : Date
});

module.exports = model('subscribers',myschema);