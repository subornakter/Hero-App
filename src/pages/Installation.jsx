import React from 'react';
import { loadInstalled,removeFromInstallation } from '../Utils/localStorage';
import { useState } from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const Installation = () => {
          const [installation, setInstallation] = useState(() => loadInstalled())
  const [sortOrder, setSortOrder] = useState('none')
  
  if (!installation.length) return <p>No Data Available</p>

  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...installation].sort((a, b) => a.size - b.size)
    } else if (sortOrder === 'size-desc') {
      return [...installation].sort((a, b) => b.size - a.size)
    } else {
      return installation
    }
  })()
  const handleRemove = id => {
    // remove from localstorage
    removeFromInstallation(id)
    // for ui instant update
    setInstallation(prev => prev.filter(p => p.id !== id))
  }
    return (
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
            <div className='flex-col justify-center items-center '>
                <h1 className='text-3xl font bold text-center'>My Installed Apps</h1>
                <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='space-y-6 mt-8'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
        
          <span className='text-xl text-gray-500'>
            ({sortedItem.length}) Products Found.
          </span>
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by Size</option>
            <option value='size-asc'>Low-&gt;High</option>
            <option value='size-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className='space-y-3 '>
        {sortedItem.map(p => (
          <div key={p.id} className='card card-side p-3 bg-gray-100 shadow rounded-md border-gray-100'>
            <figure>
              <img
                className='w-40 h-28 object-cover'
                src={p.image}
                alt={p.title}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{p.title}</h3>
            <div className='flex gap-4'>
                <div className='flex  items-center gap-2'>
                    <img className='h-[20px] w-[20px]'src={download} alt="" />
                    <h1 className='text-xl font-bold text-green-500'>{p.downloads}M</h1>
                </div>
                <div className='flex  items-center gap-2'>
                    <img className='h-[20px] w-[20px]' src={rating} alt="" />
                    <h1 className='text-xl font-bold text-orange-500'>{p.ratingAvg}</h1>
                </div>
                <div className='text-xl font-bold text-gray-400'>
                    <h1>{p.size}</h1>
                </div>
            </div>
            </div>
            <div className='pr-4 flex items-center gap-3'>
            
              <button
                onClick={() => handleRemove(p.id)}
                className='btn bg-[#00D390] text-white rounded-md p-3 '
              >
                UnInstall
              </button>
            </div>
          </div>
        ))}
      </div>
      
      </div>
      </div>
       
    );
};

export default Installation;