import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-[vw] absolute text-white pt-[18%] p-12 ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">{overview}</p>
      <div className="mt-8 flex">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
          <FaPlay size="24px" />
          <span className="ml-1">Play</span>
        </button>
        <button className=" flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md mx-2">
          <CiCircleInfo size="24px" />
          <span className="ml-1">Watch More</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
