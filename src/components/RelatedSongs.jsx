import SongBar from "./SongBar";


const RelatedSongs = ({data,isPlaying,activeSong,handlePauseClick,handlePlayClick,artistId}) =>{

    return(
    <div className="flex flex-col"><h2 className="text-white text-3xl">Related Songs :</h2>
    <div className="flex w-full flex-col mt-6">
      {data?.map((song,i)=>
      ( 
        <SongBar key={`${song.key}-${artistId}`}
        song={song} i={i} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}
    />
      )  
      
      )}
    </div>
    </div>
  )
  } 

export default RelatedSongs;
