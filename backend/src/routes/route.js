const express=require("express")
const router=express.Router()
const signupController=require("../controller/user")
router.post("/signup",signupController.signup)
router.post("/login",signupController.login)
router.get("/logout",signupController.logout)
module.exports=router