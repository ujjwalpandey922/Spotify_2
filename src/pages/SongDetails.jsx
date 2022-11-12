import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/SazamCore"; 
const SongDetails = () => {
    const dispatch = useDispatch();
    const {songid}= useParams();
    const {activeSong,isPlaying} = useSelector((state)=>state.player)
    const {data:songData,isFetching:isFetchingSongDetails}= useGetSongDetailsQuery({songid}); 
    const {data,isFetching:isFetchingRelatedSong,error}= useGetSongRelatedQuery({songid});
    
    const handlePauseClick=()=>{
        dispatch(playPause(false));
      };
      const handlePlayClick=(song,i)=>{
        dispatch(setActiveSong({song,i,data}));
        dispatch(playPause(true));
      };



   if(isFetchingSongDetails||isFetchingRelatedSong) return <Loader title="Searching Song Details"/>;
   if(error ) return <Error/>
return (<div className="flex flex-col">
    <DetailsHeader artistId="" songData={songData}
    />
    <div className="mb-10">
        <h2 className="text-white font-bold text-3xl mt-3">Lyrics:</h2>
        <div className="mt-5">
                {songData?.sections[1].type === 'LYRICS'?
                songData?.sections[1].text.map((line,i)=>(
                    <p className="text-gray-400 text-base my-1" key={i}>{line}</p>
                )):<p className="text-gray-400 text-base my-1" >No Lyric Found</p>}
        </div>
    </div>
    <RelatedSongs data={data} isPlaying={isPlaying} activeSong={activeSong} 
    hanndlePauseClick={handlePauseClick} hanndlePlayClick={handlePlayClick} />
</div>);
}

export default SongDetails;
