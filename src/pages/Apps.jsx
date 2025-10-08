import React from 'react';
import useApps from '../Hooks/useApps';
import { useState } from 'react';
import AppCard from '../components/AppCard';
import { CiSearch } from "react-icons/ci";
import Loader from '../components/Loading';
const Apps = () => {
      const { apps, loading } = useApps()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps
    
    return (
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
            <div className='flex flex-col justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold'>Our All Applications</h1>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                    <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
         
          <span className='text-xl text-gray-500'>
            ({searchedApps.length}) Products Found.
          </span>
        </h1>
        <label className='input'> 
         <CiSearch /> <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>
            </div>
            
      {loading ? (
        <Loader />
      ) : searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <p className="text-4xl text-gray-600">No App Found</p>
        </div>
      )}
    </div>
  );
};

export default Apps;