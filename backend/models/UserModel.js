const {Schema,model } = require('../connection');  //importing moongoose but instead of mongoose i imported its predifine keys

const schema = new Schema({
    username: String,
    email: String,
    password: String,
    websiteName: String,
    createdAt:Date,
});

module.exports= model("users", schema);