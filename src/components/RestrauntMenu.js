import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function RestrauntMenu() {
    const {id} = useParams();
    const res_id = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=23.2599333&lng=77.412615&restaurantId=118866&catalog_qa=undefined&submitAction=ENTER"
  const [restaurantMenu,setRestaurantMenu] = useState();
  //sum a * b between two number     const [isLoading, setIsLoading] = useState(false);
  const RestrauntMenuCard = ({ name, cloudinaryImageId, avgRating, areaName, veg, sla, costForTwo, link }) => {
    const handleClick = () => {
      window.location.href = link;
    };
    

    async function fetch_menu() {
      const data = await fetch(res_id);
      const jsond =  await data.json();
      console.log(jsond);
      const dataj = jsond?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
      // const dataj = jsond?.data?.cards[2]?.groupedCard.card?.cardGroupMap?.REGULAR?.card;
      console.log(dataj);
      setRestaurantMenu(dataj);
  }
  useEffect(() => {fetch_menu()}, [])
    return (
    <div>
        <h1>Restraunt Id: {id} </h1>
        
        <div className='flex flex-wrap space-x-4 pl-2 pr-2 justify-center'>
          {
            restaurantMenu && restaurantMenu.map((restaurant, index) => {
              return <RestrauntMenuCard {...restaurant.info} link={restaurant.cta?.link} key={index} />;
            })
          }

    </div>
    </div>
  )
}
}