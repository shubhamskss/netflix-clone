import axios from 'axios'
import { getNowPlayingMovies } from '../Redux/movieSlice'
import { Now_Playing_movie,options } from '../utils/constant'
import {useDispatch } from 'react-redux'

const useNowPlayingMovies=async()=>{//but we hve mY pi i can hit all in this component it make component big
    try{
        const dispatch=useDispatch()
const res=await axios.get(Now_Playing_movie,options)
dispatch(getNowPlayingMovies(res.data.results))
    }

    catch(err){
 console.log("err==",err)
    }
}
export default useNowPlayingMovies