import axios from "axios";
import { useDispatch} from "react-redux";
import { options,Upcoming_Movies } from "../utils/constant";
import { getUpComingMovies } from "../Redux/movieSlice";
const useUpComingMovies=async()=>{
    try{
const dispatch=useDispatch()
const res=await axios.get(Upcoming_Movies,options)
dispatch(getUpComingMovies(res.data.results))
    }
    catch(err){
console.log(err)
    }

}
export default useUpComingMovies