const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullname:{type:String,required:true},
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        // Regular expression for email validation
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address'],
      },
      password:{
        type:String,
        required:true
      }
},{
    timestamps:true
})
module.exports=mongoose.model("netflixUser",userSchema)