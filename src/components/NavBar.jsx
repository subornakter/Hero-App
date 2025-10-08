import React from 'react';
import { Link, NavLink } from 'react-router'
import Logo from '../assets/logo.png'
import { AppWindow, Download, Home, Settings } from "lucide-react";
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 md:px-15 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               <NavLink to="/" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Home</NavLink>   
      <NavLink to="/apps" className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Apps</NavLink> 
     <NavLink to="/installation"className={({isActive})=>isActive?"text-[#23BE0A] border-[#23BE0A] btn ":"text-[#131313CC] btn bg-white border-none"}>Installation</NavLink>
     
      </ul>
    </div>
<div className='flex items-center gap-2'>
    <img className="w-[40px] h-[40px]" src={Logo} alt="" />
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
  HERO.IO
</h1>
</div>
  </div>
  <div className="navbar-center ">
   <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <NavLink to="/" className={({isActive})=>isActive?"text-[#632ee3] items-center  border-b border-[#632ee3] btn ":"text-[#131313CC] btn bg-white border-none"}><Home></Home>Home</NavLink>   
      <NavLink to="/apps" className={({isActive})=>isActive?"text-[#632ee3] items-center border-b border-[#632ee3] btn ":"text-[#131313CC] btn bg-white border-none"}><AppWindow></AppWindow>Apps</NavLink> 
     <NavLink to="/installation"className={({isActive})=>isActive?"text-[#632ee3] items-center  border-b border-[#632ee3] btn ":"text-[#131313CC] btn bg-white border-none"}> <Download></Download>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
     
    
<NavLink
  to="/products"
  className="btn text-white flex gap-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
>
     <img src="https://i.ibb.co.com/LdPshm1T/Vector.png" alt="" />
  Contribute
</NavLink>

  </div>
</div>
    );
};

export default NavBar;