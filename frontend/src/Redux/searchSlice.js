import { createSlice } from "@reduxjs/toolkit";
const searchSlice=createSlice({
    name:"search",
    initialState:{
        movieName:null,
        searchMovie:null
    },
    reducers:{
        //actions
        setSearchMovieName:(state,action)=>{
            
 const {searchMovie,movies}=action.payload
 state.movieName=searchMovie
 state.searchMovie=movies
        }
 
    }
})
export const {setSearchMovieName}=searchSlice.actions
export default searchSlice.reducer