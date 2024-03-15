import axios from "axios"
import { Popular_Movies,options} from "../utils/constant"
import { useDispatch } from "react-redux"
import { getPopularMovies } from "../Redux/movieSlice"
const usePopularMovies=async()=>{
try{
    const dispatch=useDispatch()
const res=await axios.get(Popular_Movies,options)
dispatch(getPopularMovies(res.data.results))

}
catch(err){

}
}
export default usePopularMovies