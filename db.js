var  mongoose=require('mongoose')
const mongooseUrl='mongodb://localhost:27017/'
var connectMongoose=()=>{
    mongoose.connect(mongooseUrl);
    
}
module.exports=connectMongoose;