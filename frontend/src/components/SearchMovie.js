import { useState } from "react"
import { options } from "../utils/constant"
import axios from "axios"
import { search_url } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setSearchMovieName } from "../Redux/searchSlice"
import { setLoading } from "../Redux/userSlice"
import MovieList from "./MovieList"

const SearchMovie=()=>{
    const [searchMoviee,setSearchMovie]=useState("")
    const dispatch=useDispatch()
    const isLoading=useSelector(store=>store.app.isLoading)
    const {movieName,searchMovie}=useSelector(store=>store.searchMovie)
    const submitHandler=async (e)=>{
        try{
            e.preventDefault()
            dispatch(setLoading(true))
     let res=await axios.get(`${search_url}${searchMoviee}`,options)
     let movies=res?.data?.results
     console.log("mov==",res)
     dispatch(setSearchMovieName({searchMoviee,movies}))
        }
       catch(err){console.log(err)}finally{
        dispatch(setLoading(false))
       }
       setSearchMovie("")
    }
    return (<>
    <div className="flex justify-center pt-[10%] w-[100%]">
<form className="w-[50%]" onSubmit={submitHandler}>
    <div className='flex justify-between shaow-md border-2 border-gray-200 rounded-lg w-[100%] p-2'>

          <input className="w-full outline-none rounded-md text-lg" placeholder='search movie ...' value={searchMoviee} onChange={(e)=>{setSearchMovie(e.target.value)}}></input>
    <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading?"Loading...":"Search"}</button>
    </div>
  
</form>

    </div>
    <MovieList title={movieName} movies={searchMovie} searchMovie={true}/>
    </>)
}
export default SearchMovie