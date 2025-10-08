import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const AppCard = ({app}) => {
     const { title, image, downloads,ratingAvg, id } = app
    return (

  <Link to={`/appDetails/${id}`}>
          <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-54 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions justify-between">
<div className='bg-[#F1F5E8] text-green-600 rounded-2xl p-2'>
         <p className='flex items-center gap-2'><img className='w-[20px] h-[20px]' src={download} alt="" />{downloads} M</p>
</div>
   <div className='bg-[#FFF0E1] text-orange-600 rounded-2xl p-2'>
      <p className='flex items-center gap-2'><img className='w-[20px] h-[20px]' src={rating} alt="" />{ratingAvg}</p>
   </div>
    </div>
  </div>
</div>
  </Link>
    );
};

export default AppCard;