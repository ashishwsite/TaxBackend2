var  mongoose=require('mongoose')
const mongooseUrl=require('./Private/data')
var connectMongoose=()=>{
    mongoose.connect(mongooseUrl);
    
}
module.exports=connectMongoose;