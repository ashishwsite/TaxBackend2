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
const path = require("path");
app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "frontend", "build")));
res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
// app.get('/',(req,res)=>{
//     res.send("hellow ,server is running fine ")
// })
// app.get('/about',(req,res)=>{
//     res.send("the response is for /about requst ")
// })
// app.get('/contact',(req,res)=>{
//     res.send("the respoonse for /contact requset ")
// })
// app.get('/home',(req,res)=>{
//     res.send("for /home request")
// })


app.use('/auth',require('./Routes/Auth'))
app.listen(port,()=>{
    console.log(` backend  is listening at http://localhost:${port}`)
})