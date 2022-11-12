import { useState } from "react";
import {FiSearch} from "react-icons/Fi"
import { useNavigate } from "react-router-dom";
const Searchbar = () => 
{
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${search}`);
  }
  return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-200 focus-within:text-gray-700 ">
    <label htmlFor="search-field" className="sr-only">
      Search All Songs Here....
    </label>
    <div className="flex justify-center items-center">
    <FiSearch className="w-5 h-5 ml-4"/>
    <input name="search-field" autoComplete="off" id="search-field" placeholder="Search" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-2"/>
    </div>
  </form>
);
}
export default Searchbar;
