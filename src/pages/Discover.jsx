import { useDispatch,useSelector } from "react-redux";
import { Error,Loader,SongCard } from "../components";
import {genres} from "../assets/constants"
import { useGetSongByGenreQuery } from "../redux/services/SazamCore"; 
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong,isPlaying,genreListId} = useSelector((state)=>state.player)
    const {data,isLoading,error} = useGetSongByGenreQuery(genreListId||"POP");
    if(isLoading) return <Loader title="LOADING SONGS...."/>
    if(error) return <Error/>
return(
<div className="flex flex-col">
    <div className="w-full flex justify-between items-center flex-col  mb-4 sm:flex-row ">
        <h2 className="text-red-500 font-mono font-bold text-4xl">Discover {genreListId}</h2>
        <select name="" id="" value={genreListId||"pop"} onChange={(e)=>dispatch(selectGenreListId(e.target.value))} 
        className="bg-black text-red-500 p-3 text-sm 
        rounded-xl outline-none cursor-pointer  mt-2 sm:mt-0">
            {genres.map((e)=> <option key={e.value} value={e.value}>{e.title} </option>)}
        </select>

    </div>
    <div className="flex flex-wrap justify-center gap-10 sm:justify-start">
        {data?.map((song,i)=>(
            <SongCard key={song.key} song={song} i={i} data={data} activeSong={activeSong} isPlaying={isPlaying}/>
        ))}
    </div>
</div>
)
}


export default Discover;
