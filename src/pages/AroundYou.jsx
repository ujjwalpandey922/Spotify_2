
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SongCard } from '../components';
import { useGetSongByCountryQuery } from '../redux/services/SazamCore';

const CountryTracks = () => {
   
    const [country, setCountry] = useState('IN');
    const [loader, setLoader] = useState(true);
   const {activeSong,isPlaying} = useSelector((state)=>state.player);
    const {data,isFetching,error} = useGetSongByCountryQuery(country)
// const fetchCountry = async()=>{
//     const res = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_owXZEndLuNHJTQEO0LYJTjkt8mR73');
//     const data = await res.json();
//     setCountry(data)
//     setLoader(false)
// }
// console.log(country);

// useEffect(() => {
//  fetchCountry();
// // axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_owXZEndLuNHJTQEO0LYJTjkt8mR73').then((res)=>setCountry(res.data.location.country)).catch((e)=>console.log(e)).finally(setLoader(false))
// }, [country])

if(isFetching && loader) return <loader title="Loading Country Songs"/>
if(error&& country) return <Error/>
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-3 mb-5'> Around You</h2>
        <div className="flex flex-wrap justify-center gap-10 sm:justify-start ">
            {data.map((e,i)=>(
                <SongCard song={e} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} key={e.key}/>
            ))}
        </div>
    </div>)

};

export default CountryTracks;
