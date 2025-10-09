import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/AppCard';
import { CiSearch } from "react-icons/ci";
import Loader from '../components/Loading';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  if (loading) return <Loader />;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 200); 
  };

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter(app => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-6 md:py-10'>
      <div className='flex flex-col justify-center items-center mb-8'>
        <h1 className='text-3xl font-bold'>Our All Applications</h1>
        <p className='text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions.</p>
      </div>

      <div className='flex justify-between py-5 items-center flex-col md:flex-row gap-4'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-500'>
            ({searchedApps.length}) Products Found.
          </span>
        </h1>

        <label className='input flex items-center gap-2 border px-3 py-2 rounded-md bg-gray-100'>
          <CiSearch className='text-gray-500 text-xl' />
          <input
            value={search}
            onChange={handleSearch}
            type='search'
            placeholder='Search Apps...'
            className='bg-transparent outline-none w-full'
          />
        </label>
      </div>

      {searchLoading ? (
        <Loader />
      ) : searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <p className="text-2xl text-gray-600">No App Found</p>
        </div>
      )}
    </div>
  );
};

export default Apps;
