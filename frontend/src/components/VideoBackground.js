import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({movieId,bool}) => {
  
  const trailer=useSelector(store=>store.movie.trailerMovie)
  useMovieById(movieId)
  return (
    <div className="w-screen">
      <iframe
        className={`${bool?"w-100%":"w-screen aspect-video"}`}//to show video full screen
        src={`https://www.youtube.com/embed/${trailer?.key}?si=FqLSOpWjE-tSkF92&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
// src="https://www.youtube.com/embed/XLqmL9cPN1E?si=Lm_cSgomd_6HF8rl&autoplay=1&mute=1"
// here autoplay=1 autoplay video and mute=1 mute video because we are going to use it as background video
