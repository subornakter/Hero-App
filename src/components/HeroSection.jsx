import React from 'react';
import Hero from '../assets/hero.png';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#f7f7fb] overflow-hidden">
      {/* 🔹 Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-5 pt-10">
        <h1 className="text-6xl font-bold">
          We Build
        </h1>
        <h1 className="text-6xl font-bold">
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-gray-500 pt-2 text-[14px] max-w-2xl">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-3 mt-5">
         <Link to={"https://play.google.com/store/games?hl=en&pli=1"}>
          <button className="flex gap-2 p-3 btn border border-gray-300">
            <img src="https://i.ibb.co.com/HDZCd83v/Group.png" alt="" />Play Store
          </button>
         </Link>
         <Link to={"https://www.apple.com/app-store/"}>
          <button className="flex gap-2 p-3 btn border border-gray-300">
            <img src="https://i.ibb.co.com/k29V9kbC/Group-1.png" alt="" />App Store
          </button>
         </Link>
        </div>

        
      </div>
      <div className="pt-5">
          <img className="w-full h-[300px] object-contain" src={Hero} alt="Hero Section" />
        </div>
      <div className="w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-20 space-y-10 ">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
            <div>
              <p className="text-sm opacity-80 mb-2">Total Downloads</p>
              <h3 className="text-5xl font-extrabold">29.6M</h3>
              <p className="text-sm mt-2 text-[#ffd6f9]">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm opacity-80 mb-2">Total Reviews</p>
              <h3 className="text-5xl font-extrabold">906K</h3>
              <p className="text-sm mt-2 text-[#ffd6f9]">
                46% More Than Last Month
              </p>
            </div>

      
            <div>
              <p className="text-sm opacity-80 mb-2">Active Apps</p>
              <h3 className="text-5xl font-extrabold">132+</h3>
              <p className="text-sm mt-2 text-[#ffd6f9]">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
