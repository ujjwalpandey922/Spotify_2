import { Link } from "react-router-dom";
const DetailsHeader = ({artistId,artistData,songData}) => 
{
  
  return (
    <div className="relative w-full flex- flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black h-28 sm:h-48"/>
      <div className="flex items-center absolute inset-0"> 
        <img alt="artwork" src={artistId ? artistData?.artists[artistId]?.attributes?.artwork?.url.replace('{w}','500').replace('{h}','500'): songData?.images?.coverart} className="w-28 h-28 sm:w-48 sm:h-48 rounded-full object-cover border-2 shadow-xl shadow-black "/>
        <div className="ml-5">
          <p className="font-bold text-xl text-white sm:text-3xl">{artistId ? artistData?.artists[artistId]?.attributes?.name:songData?.title}</p>
          {!artistId && (<Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-gray-300 mt-2 text-base">{songData?.subtitle} </p>
          </Link>)}
          <p className="text-gray-300 mt-2 text-base">{artistId ? artistData?.artists[artistId]?.attributes?.genreNames[0]:songData?.genres?.primary }</p>
        </div>
      </div>
      </div>
  );
}

export default DetailsHeader;
