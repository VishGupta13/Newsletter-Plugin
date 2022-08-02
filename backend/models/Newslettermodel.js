
const {Schema,model, Types } = require('../connection');  //importing moongoose but instead of mongoose i imported its predifine keys

const schema = new Schema({
    content: String,
    schedule:Number,
    view:String,
    owner:{type : Types.ObjectId, ref:"users"},
   createdAt:Date,
});

module.exports= model("newsForm", schema);