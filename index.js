const connectMongoose=require('./db')
const express=require('express')
const port=process.env.PORT ||5000;
var cors=require('cors')
connectMongoose();
//express se server bana raha hua aur uska name app de diya 
const app=express()
app.use(cors())
//server bana hai expeess ki help se 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.use('/',require('./Routes/Auth'))
app.listen(port,()=>{
    console.log(` backend  is listening at http://localhost:${port}`)
})