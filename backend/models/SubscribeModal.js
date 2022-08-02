
const {Schema,model, Types } = require('../connection');  //importing moongoose but instead of mongoose i imported its predifine keys

const schema = new Schema({
    email:String,
    name:String,
    owner:{type : Types.ObjectId, ref:"users"},
    createdAt: {type: Date},
});

module.exports= model("newsletter", schema);