import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 mt-10">
      <div className="grid md:grid-cols-5 gap-8">
        
        {/* About Section */}
        <div>
          <div className='flex items-center gap-1'>
            <img className='h-[25px] w-[25px]' src={logo} alt="" />
            <h3 className="text-white font-semibold mb-2">HERO.IO</h3>
          </div>
          <p className="text-[12px] p-2 text-gray-400 leading-relaxed">
           HERO.IO is a modern platform showcasing creative, high-quality, and efficient apps built for the next generation. 
            Discover, explore, and download the best apps made with passion and innovation — all in one place.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">App Showcase</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Developer Tools</a></li>
            <li><a href="#" className="hover:text-white transition-colors">User Reviews</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Join as Developer</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-4 h-4" />
              <span>@Hero-App</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-4 h-4" />
              <span>@Hero-App</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4" />
              <span>@Hero-App</span>
            </li>
            
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co.com/67FzjgSn/communication.png" alt="Email" className="w-4 h-4" />
              <span>support@heroapp.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-left md:text-center text-white text-sm border-t border-gray-700 pt-4 mt-10">
        © 2025 HERO.IO. <br className="block md:hidden" /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
