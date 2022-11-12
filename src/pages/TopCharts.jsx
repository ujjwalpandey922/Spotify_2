
import React from 'react';
import { useSelector } from 'react-redux';
import { SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/SazamCore';

const TopCharts = () => {
   const {activeSong,isPlaying} = useSelector((state)=>state.player);
    const {data,isFetching,error} = useGetTopChartsQuery();

if(isFetching ) return <loader title="Loading Top Songs"/>
if(error) return <Error/>
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-3 mb-5'> Top Charts World Wide</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start ">
            {data.map((e,i)=>(
                <SongCard song={e} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} key={e.key}/>
            ))}
        </div>
    </div>)

};

export default TopCharts;