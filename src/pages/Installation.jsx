import React, { useState } from 'react';
import { loadInstalled, removeFromInstallation } from '../Utils/localStorage';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import useApps from '../Hooks/useApps';
import Loading from '../components/Loading'
const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstalled());
  const [sortOrder, setSortOrder] = useState('none');
   const {loading}=useApps();
  if (!installation.length)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500 text-lg">
        No Installed Apps Found
      </div>
    );

  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'size-desc') {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    removeFromInstallation(id);
    setInstallation((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          My Installed Apps
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sort & Count */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-3">
        <h2 className="text-lg font-semibold text-gray-700">
         ({sortedItem.length}) Products Found
        </h2>

        <div>
          <select
            className="border border-gray-300 rounded-md p-2 text-gray-600 focus:ring-2 focus:ring-[#00D390]"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low → High</option>
            <option value="size-desc">High → Low</option>
          </select>
        </div>
      </div>

      {/* Cards Section */}
         {loading ? (
        <Loading />
      ) : (
      <div className="space-y-5 mt-6">
       
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-5 border border-gray-100"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="w-36 h-24 object-cover rounded-md"
                src={p.image}
                alt={p.title}
              />
            </div>

            {/* App Info */}
            <div className="flex-1 w-full md:ml-6 mt-3 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {p.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={download} alt="downloads" />
                  <span className="font-semibold text-green-500">
                    {p.downloads}M
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={rating} alt="rating" />
                  <span className="font-semibold text-orange-500">
                    {p.ratingAvg}
                  </span>
                </div>
                <span className="font-semibold text-gray-400">{p.size} MB</span>
              </div>
            </div>

            {/* Remove Button */}
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleRemove(p.id)}
                className="bg-[#00D390] hover:bg-[#00b57a] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
      
  );
};

export default Installation;
