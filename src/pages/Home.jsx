import React from 'react';
import HeroSection from '../components/HeroSection';
import useApps from '../Hooks/useApps';
import AppCard from '../components/AppCard';
import { Link } from 'react-router';
import Loading from '../components/Loading'
const Home = () => {
          const { loading , apps } = useApps()
         
  const featuredProducts = apps.slice(0, 8)
    return (
        <div className='bg-[#f7f7fb] '>
            <HeroSection></HeroSection>
            <div className='flex  flex-col items-center mt-10'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500 mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
              {loading ? (
        <Loading />
      ) : (
            <div className='max-w-screen-xl  mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-8 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4'>
          {featuredProducts.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
        <div className='flex justify-center items-center mb-5'>
              <Link className='btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]' to='/apps'>
        Show all
        </Link> 
        </div>
        </div>
    );
};

export default Home;