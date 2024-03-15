import { useDispatch } from "react-redux"
import { Banner_Url } from "../utils/constant"
import { setOpen ,getId} from "../Redux/movieSlice"

const MovieCard=({posterPath,movieId})=>{
    const dispatch=useDispatch()
    if(!posterPath){return null}//movie whose poster are there should be display
    
    const handleOpen=()=>{
        dispatch(getId(movieId))
        dispatch(setOpen(true))
    }
    return(<div className="w-48 pr-2" onClick={handleOpen}>
        <img src={`${Banner_Url}/${posterPath}`} alt="movie-banner"></img>
    </div>)
}
export default MovieCard