const connectMongoose=require('./db')
const express=require('express')
const port=process.PORT||5000
var cors=require('cors')
connectMongoose();
const app=express()
app.use(cors())
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send("hellow world")
// })
app.use('/',require('./Routes/Auth'))
app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`)
})