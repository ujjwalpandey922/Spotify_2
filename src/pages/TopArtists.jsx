
import { ArtistCard,Loader,Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/SazamCore';

const TopArtists = () => {
    const {data,isFetching,error} = useGetTopChartsQuery();

if(isFetching ) return <Loader title="Loading Top Songs"/>
if(error) return <Error/>
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-3 mb-5'> Top Artists </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start ">
            {data.map((e)=>(
                <ArtistCard key={e.key} track={e}/>
            ))}
        </div>
    </div>)

};

export default TopArtists;