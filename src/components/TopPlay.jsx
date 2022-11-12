import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Swiper,SwiperSlide } from "swiper/react";
import {FreeMode} from 'swiper'
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/SazamCore";
import "swiper/css";
import "swiper/css/free-mode";

//TopChartCard
const TopChartCard = ({song,i,isPlaying, activeSong,
  handlePauseClick, handlePlayClick,})=>(
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] 
  py-1 p-3 rounded-lg cursor-pointer mb-2">
   <h3 className="font-bold text-base text-white mr-3">{i+1}.</h3>
   <div className="flex flex-1 w-100 justify-between items-center">
    <img src={song?.images?.coverart} alt={song.name} className="w-20 h-20 rounded-lg"/>
        <div className="flex flex-1 flex-col justify-center mx-3">
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl text-white font-bold">{song?.title}</p>
            </Link>
            <Link to={`/artists/${song?.artists[0].adamid}`}>
              <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
            </Link>
        </div>
   </div>
   <PlayPause 
   isPlaying={isPlaying} activeSong={activeSong}
   handlePause={handlePauseClick} handlePlay={()=>handlePlayClick(song,i)} song={song}
   />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const {data} =  useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlay= data?.slice(0,5);
  const handlePauseClick=()=>{
    dispatch(playPause(false));
  };
  const handlePlayClick=(song,i)=>{
    dispatch(setActiveSong({song,i,data}));
    dispatch(playPause(true));
  };
  useEffect(() => {
    divRef.current.scrollIntoView({behavior:"smooth"})
  })
  
  return (
    <div className=" xl:ml-6 xl:mb-0 xl:max-w-[380px] ml-0 mb-2 flex-1 flex flex-col max-w-full space-y-1" ref={divRef}>
      <div className="  flex flex-col w-full">
        <div className="  flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-xl">Top Charts</h2>
         <Link to="/top-charts">
          <p className="text-gray-300 cursor-pointer font-bold "> See More</p>
          </Link> 
        </div>
        <div className="flex flex-col gap-1 mt-1 ">
          {topPlay?.map((song,i)=>(
            <TopChartCard song={song} i={i} key={song.key} isPlaying={isPlaying} activeSong={activeSong}
            handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
      
          <h2 className="text-white font-bold text-xl">Top Artists</h2>
         <Link to="/top-artists">
          <p className="text-gray-300 cursor-pointer font-bold "> See More</p>
          </Link> 
          </div>
          <Swiper slidesPerView="auto" 
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          className="mt-4"
          modules={[FreeMode]}
          >
          {topPlay?.map((song)=>(
            <SwiperSlide  key={song.key} style={{width:"25%",heigth:"auto"}} className="shadow-lg rounded-full animate-slideright">
                <Link to={`/artists/${song?.artists[0].adamid}`}> 
                <img src={song.images.background} alt="img" className="rounded-full w-full object-cover"/>
                </Link>
            </SwiperSlide>
          ))}
          </Swiper>

    </div>
  )
}

export default TopPlay;
