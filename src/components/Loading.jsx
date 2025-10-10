import React from 'react';
// import { PacmanLoader } from "react-spinners";
import logo from "../assets/logo.png";
const Loader = () => {
  return (
    // <div className="flex justify-center items-center min-h-[50vh]">    
    //   <PacmanLoader color="purple" />
   
    // </div>
        <div className="">
      <h1 className=" flex items-center content-center  md:gap-3 gap-2 justify-center text-center text-2xl md:text-5xl h-screen font-bold text-gray-500">
        L
        <figure className="w-8 md:w-12 animate-spin rotate-360 opacity-60">
          <img className="" src={logo} />
        </figure>
        ading.........
      </h1>
    </div>
  );
};

export default Loader;
