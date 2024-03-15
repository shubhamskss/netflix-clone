import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MovieContainer=()=>{
    const movie=useSelector((store)=>store.movie)
    return(
        <div className="bg-black ">
            <div className="-mt-52 z-10">
            <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
            <MovieList title={"Now PlayingMovies"} movies={movie.nowPlayingMovies}/>

            <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>

            <MovieList title={"UpComing Movies"} movies={movie.upComingMovies}/>

            </div>
           
        </div>
    )
}
export default MovieContainer