const  express=require('express')
const User=require('../Modal/User')
const router=express.Router();
https://taxbackend2.onrender.com/
router.get('/',async(req,res)=>{
  return res.json({"name":"ramsashhish"})
})
router.post('/contact', async(req,res)=>{
    var bodyData=req.body
    console.log("req body data ",bodyData)
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ "success":"false"  })
    }
   user = await User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        state:req.body.state
      });
      const data = {
        user: {
          id: user.id
        }
      }
    return res.json({"success":"true",user})
})
module.exports=router