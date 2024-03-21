import Header from "./Header"
import { useState } from "react";
import { API_END_POINT } from "../utils/constant";
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setLoading } from "../Redux/userSlice";
import useIsTokenExpired from "../hooks/useIsTokenExpired";
const Login=()=>{
    const [isLogin,setLogin]=useState(false);
    const [fullName,setFullName]=useState("")
    const [Email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const isLoading=useSelector(store=>store.app.isLoading)
    let userToken=localStorage.getItem("userToken")
    var isValidToken=useIsTokenExpired(userToken)?false:true
  

    const loginHandler=()=>{
        setLogin(!isLogin)
    }
    
    const getInputData=async (e)=>{
        e.preventDefault()
        dispatch(setLoading(true))
        try{
            if(isLogin){
                const user={Email,password}
                const response=await axios.post(`${API_END_POINT}/login`,user,{
                    headers:{
                        'content-type':'application/json',

                    },
                    withCredentials:true
                })
            
 if(response?.data?.status){toast.success(response.data.message)
localStorage.setItem('userToken',response?.data?.token)
localStorage.setItem('name',response?.data?.user?.fullname)
}

 //dispatch action
 dispatch(setUser(response.data.user))
 if(isValidToken){
   
    navigate("/browse") 
    
}
// navigate("/browse")            
}
            else{
            const user={fullName,Email,password}
            const response=await axios.post(`${API_END_POINT}/signup`,user,{
                headers:{
                    'content-type':'application/json',

                },
                withCredentials:true
            })

        if(response.data.status){toast.success(response.data.message)}
        setLogin(true)
        }
        }
        catch(err){
            toast.error(err.response.data.message)

        }
        finally{
            dispatch(setLoading(false))
        }
    }
    
    return(<div >
    <Header/>
    <div className="absolute">
        <img className="w-[100vw] h-[100vh] bg-cover" src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="banner"></img>
    </div>

<form onSubmit={getInputData} className=" flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-90 rounded-md" >
    <h1 className="text-white text-2xl mb-5 font-bold">{isLogin?"Login":"SIgnup"}</h1>
    <div className="flex flex-col">
        {!isLogin && <input value={fullName} onChange={(e=>setFullName(e.target.value))} type="text" placeholder="Fullname" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"></input>} 
        

        <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"></input>
        
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"></input>
        <button type='submit' className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">{`${isLoading?"Loading...":(isLogin?"Login":"Signup")}`}</button>
 <p className="text-white">{isLogin?"New To NetFlix?":"Already Have an Accoutn?"}
 <span className="ml-1 mt-2 text-blue-900 font-medium cursor-pointer" onClick={loginHandler}>
    {isLogin?"Signup":"Login"}
 </span>
 </p>

    </div>
</form>

    </div>)
}
export default Login