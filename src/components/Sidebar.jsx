import { useState } from "react";
import {NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import {logo} from "../assets";
import {links} from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
const NavLinkss =({handleClick})=>(
  <div className="mt-4">
    {links.map((e)=> (
      <NavLink exact to={e.to} key={e.name} className={`flex flex-row justify-start items-center my-8 text-2xl font-large text-gray-400 hover:text-red-200 `}  onClick={()=>handleClick && handleClick()}>
       <e.icon className="w-6 h-6 mr-2"/>
      {e.name }
     </NavLink>
    ))}
  </div>
)
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return(
    <>
    <div className="hidden flex-col w-[250px] py-10 px-4 bg-red-800 md:flex">
      <img src={logo} alt="logo" className="w-full h-15 object-contain"/>
    <NavLinkss/>
    </div>
  
    <div className="absolute block top-6 right-3 md:hidden">
      {mobileMenuOpen?
      <RiCloseLine className="text-3xl w-6 h-6 mr-2 text-white cursor-pointer" onClick={()=>setMobileMenuOpen(false)}/>:
      <HiOutlineMenu className="text-3xl w-6 h-6 mr-2 text-white cursor-pointer"  onClick={()=>setMobileMenuOpen(true)}/>}
    </div>

    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-red-500 
    backdrop-blur-lg z-10 p-5 smooth-transition md:hidden ${mobileMenuOpen?'left-0':" -left-full"}`}>
      <img src={logo} alt="logo" className="w-full h-15 object-contain"/>
    <NavLinkss onClick={()=>setMobileMenuOpen(false)}/>
    </div>
    </>
  );
}

export default Sidebar;
