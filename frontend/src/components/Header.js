import { IoIosArrowDropdown } from "react-icons/io";
import {useDispatch, useSelector} from 'react-redux'
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { setUser } from "../Redux/userSlice";
import { setToggle } from "../Redux/movieSlice";
//on refresh user getting fades
const Header=()=>{
const navigate=useNavigate()
const user =useSelector((store)=>store.app.user)
const dispatch=useDispatch()
    const toggle=useSelector((store)=>store.movie.toggle)
    const logoutHandler=async()=>{
        try{
            let response=await axios.get(`${API_END_POINT}/logout`)
            
            dispatch(setUser(null))
                 navigate("/")
                 toast(response.data.message)

        }
        catch(err){
        toast(err.data.message)
console.log(err)
        }
 
    }
    const toggleHandler=()=>{
        dispatch(setToggle())

    }
    return(<div className="absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black">
    <img  className="w-56" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo"></img>
{user && <div className='flex items-center px-6'>
    <IoIosArrowDropdown size="24px" color="white"/>
    <h1 className="text-lg font-medium text-white" >{user.fullname}</h1>
    <div className='ml-4'>
    <button className='bg-red-800 text-white px-4 py-4' onClick={logoutHandler}>Logout</button>
    <button className='bg-red-800 text-white px-4 py-4 ml-2' onClick={toggleHandler}>{toggle?"Home":"Search Movie"}</button>
    </div>
</div> }



    </div>)
}
export default Header