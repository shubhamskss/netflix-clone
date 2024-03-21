import { useSelector ,useDispatch} from "react-redux"
import Header from "./Header"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import MainContainer from "./MainContainer"
import MovieContainer from "./Moviecontainer"
import axios from 'axios'
import { Now_Playing_movie } from "../utils/constant"
import { options } from "../utils/constant"
import { getNowPlayingMovies } from "../Redux/movieSlice"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpComingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import SearchMovie from "./SearchMovie"

const Browse=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=useSelector((store)=>store.app.user)
    const toggle=useSelector((store)=>store.movie.toggle)
    //custom hooks start
    useNowPlayingMovies()
    usePopularMovies()
    useUpComingMovies()
    useTopRatedMovies()
    useEffect(()=>{
        if(!localStorage.getItem("userToken")){navigate("/")}
        

    })
    //we need to write in use Effect because when tah tpage render useEffect ccalled
    return(
        <>
        <Header/>
        <div>{
            toggle?<SearchMovie/>:(
                <>
                 <MainContainer/>
            <MovieContainer/>
                </>
            )
            }
           
        </div>
        
        </>
    )
}
export default Browse