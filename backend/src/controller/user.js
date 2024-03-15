const userModel = require("../models/user");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const signup = async (req, res) => {
  try {
    
    const { fullName, Email, password } = req.body;

    if (
      !fullName ||
      fullName.trim().length == 0 ||
      !Email ||
      Email.trim().length == 0 ||
      !password ||
      password.trim().length == 0
    ) {
      return res.status(422).send({status:false,message:"unprocessavle entity"});
    }
    let checkExistingUser=await userModel.findOne({
        email:Email
    })
    if(checkExistingUser && Object.keys(checkExistingUser).length>0){
        return res.status(400).send({status:false,message:"user already Registered"})
    }
    const hashedPassword=await bcrypt.hash(password,16)
let user=await userModel.create({
    fullname:fullName,
    email:Email,
    password:hashedPassword
})
return res.status(201).send({status:true,message:"user registered sucessfully",user:user})
  } catch (err) {
    console.log(err);
    return res.status(500).send({status:false,message:"something went wrong"});
  }
};

const login=async (req,res)=>{
    try{
    const {Email,password}=req.body
    if(!Email ||Email.trim().length==0 ||!password ||password.trim().length==0){
        return res.sendStatus(422)
    }
    let checkExistingUser=await userModel.findOne({
        email:Email
    })
    if(!checkExistingUser){return res.status(422).send({status:false,message:"user not Registered"})}

    const isMatch=await bcrypt.compare(password,checkExistingUser.password)
    if(!isMatch){return res.status(422).send({status:false,message:"user not Registered"})}

let token=await jwt.sign({
    userId:checkExistingUser._id
},'shubham kumar',{expiresIn:'2h'})
// res.setHeader('x-api-token',token)
res.status(201).cookie("token",token,{httpOnly:true}).json({
    message:`welcome back ${checkExistingUser.fullname}`,
    status:true,
    user:checkExistingUser
})
    }
catch(err){
    console.log(err)
    return res.status(500).send({status:false,message:"something went wrong"})
}
}

const logout=async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:Date(Date.now()),httpOnly:true}).json({
        message:"user logged out successfully",
        status:true
    })
}
module.exports.logout=logout
module.exports.signup = signup;
module.exports.login=login