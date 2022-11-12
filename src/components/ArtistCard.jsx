import { useNavigate } from "react-router-dom";
const ArtistCard = ({track}) => {
  const navigate = useNavigate();

return (
  <div className=" flex flex-col cursor-pointer w-[190px] p-3 bg-red-400 bg-opacity-60 backdrop-blur-sm animate-slideup rounded-xl " onClick={()=>navigate(`/artists/${track?.artists[0]?.adamid}`)}>
 <img alt="song_img" src={track.images?.coverart} className="rounded-xl w-full h-45"/>
 <p className="font-semibold text-sm text-grey truncate mt-1 text-white">{track.subtitle}</p>
  </div>
)
};

export default ArtistCard;
