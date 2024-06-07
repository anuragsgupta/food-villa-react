import React, { useState, useEffect } from 'react';
import { RES_BASE_IMG_URL } from "./config.js";
import { filterData } from '../ulits/helper.js';
import useOnline from '../ulits/usOnline.js';
import { fetchRestaurantData } from './config.js';
import Shimmer from './Shimmer.js';

const Body = () => {

  const isOnline = useOnline();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurant] = useState([]);




  useEffect(() => {
    fetchRestaurantData(setAllRestaurant, setFilteredRestaurant).catch((error) => {
      console.log(error);
      return (
        <>

        <h1>Failed To fetch Data</h1>
        </>
        );
    });

  }, []);


  console.log(!isOnline);
  if (!isOnline) {
    return <h1> 🚧🔴🚧,No Internet Connection, Please Check Your Internet Connection  🚧🔴🚧</h1>;
  }
  const RestrauntCard = ({ name, cloudinaryImageId, avgRating, areaName, veg, sla, costForTwo, link }) => {
    const handleClick = () => {
      window.location.href = link;
    };

    return (
      <div className='w-[250px] h-[430px]  p-2 shadow-md flex flex-col shadow-orange-100'>
        <img className=' w-[250px] h-[150px] ' alt={name + "image"} src={RES_BASE_IMG_URL + cloudinaryImageId} />
        <hr className="my-1 h-0.5 border-t-0  bg-black opacity-100 dark:opacity-50"/>
        <button className='order-now-btn button rounded-md p-2 my-2 hover:bg-slate-400 bg-slate-300' onClick={handleClick}>Order Now</button>
        <h2 className='font-bold text-2xl'>{name}</h2>
        <h4 className='card-res-name'>{"Location " + areaName}</h4>
        <h4 className='card-res-name'>Delivery In {sla.slaString} </h4>
        <h4 className='card-res-name'>offer {costForTwo} </h4>
        <h4 className='card-res-name'>{veg ? "Veg" : "Non-Veg"}  |  {avgRating} Rating </h4>
      </div>
    );
  };




  if (!allRestaurants) return null;
  return (allRestaurants.length === 0) ? <Shimmer /> : (
    <>

      <div className='search-container text-center pb-1 flex justify-center '>
        
        <div>
          <input type='text' className='search-input  border border-amber-300'
            placeholder='Search' value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} />
        </div>

        <div>
          <button className='search-button bg-slate-400 rounded-md ' onClick={() => {
            setFilteredRestaurant(filterData(searchText, allRestaurants));
          }}>Search</button>
        </div>
        </div>


        <h3 className=' font-bold pl-6'>Avaiable Restaurants</h3>
        <br />
        {/* <div className='restaurant-cards-container '> */}

        <div className='flex flex-wrap space-x-4 pl-2 pr-2 justify-center'>
          {
            filteredRestaurants && filteredRestaurants.map((restaurant, index) => {
              return <RestrauntCard {...restaurant.info} link={restaurant.cta?.link} key={index} />;
            })
          }

        </div>

      </>
      );
};

      export default Body;
