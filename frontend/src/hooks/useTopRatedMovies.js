import axios from "axios";
import { useDispatch} from "react-redux";
import { options,Top_Rated_Movies } from "../utils/constant";
import { getTopRatedMovies } from "../Redux/movieSlice";
const useTopRatedMovies=async()=>{
    try{
const dispatch=useDispatch()
const res=await axios.get(Top_Rated_Movies,options)
dispatch(getTopRatedMovies(res.data.results))
    }
    catch(err){
console.log(err)
    }

}
export default useTopRatedMovies