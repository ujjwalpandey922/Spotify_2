
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SongCard,Error,Loader } from '../components';
import { useGetSongBySearchQuery } from '../redux/services/SazamCore';

const Search = () => {
  const {searchTerm} = useParams();
   const {activeSong,isPlaying} = useSelector((state)=>state.player);
    const {data,isFetching,error} = useGetSongBySearchQuery(searchTerm);

if(isFetching ) return <Loader title="Loading Top Songs"/>
if(error) return <Error/>

const songs = data?.tracks?.hits?.map((e)=>e.track);
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-3 mb-5'> 
        Showing results for <span className='text-gray-500'>{searchTerm}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start ">
            {songs.map((e,i)=>(
                <SongCard song={e} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} key={e.key}/>
            ))}
        </div>
    </div>)

};

export default Search;