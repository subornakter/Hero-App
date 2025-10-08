import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';
import { loadInstalled, updateList } from '../Utils/localStorage';
import NotFound from './NotFound';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find(p => p.id === Number(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed = loadInstalled();
    setIsInstalled(installed.some(p => p.id === Number(id)));
  }, [id]);

  if (loading) return <p>Loading.......</p>;

 if(!app){
    return <NotFound/>
 }

  const { title, companyName, image, description, size, reviews, downloads, ratingAvg, ratings } = app;

  const handleInstall = () => {
    const success = updateList(app);
    if (success) setIsInstalled(true);
  };

  return (
    <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
      {/*  Info Section  */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-11/12 md:w-3/4 mt-10">
        <div className="flex-shrink-0 bg-gray-50 p-10 rounded-md shadow-sm">
          <img src={image} alt={title} className="h-[200px] w-full object-contain mx-auto" />
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 font-medium">Developed By: {companyName}</p>
          <div className="border-t border-gray-200 my-3"></div>

          <div className="flex justify-between mt-8">
            <div className="flex-col items-center">
              <img src={download} alt="" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-4xl font-bold">{downloads}M</h1>
            </div>
            <div className="flex-col items-center">
              <img src={rating} alt="" />
              <p className="text-gray-500">Average Ratings</p>
              <h1 className="text-4xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="flex-col items-center">
              <img src={iconReview} alt="" />
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="text-4xl font-bold">{reviews}K</h1>
            </div>
          </div>

          {isInstalled ? (
            <button
              disabled
              className="btn bg-[#00D390] text-white rounded-md p-3 cursor-not-allowed opacity-100"
            >
              Installed
            </button>
          ) : (
            <button
              onClick={handleInstall}
              className="btn bg-[#00D390] text-white rounded-md p-3"
            >
              Install Now ({size} MB)
            </button>
          )}
        </div>
      </div>

      {/*  Ratings  */}
      <div className="mt-12 ">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8C00" barSize={30}>
              <LabelList dataKey="count" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/*  Description */}
      <div className="mt-8 ">
        <h1 className="text-2xl font-bold mb-2">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
