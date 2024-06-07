import { RES_BASE_URL } from "../components/config";



export function filterData(searchText, restaurants) {
    const filterDatas = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filterDatas;
  }
export async function fetchRestaurantData(setAllRestaurant,setFilteredRestaurant) {
    

  try {
    const data = await fetch(RES_BASE_URL);
    const jsond =  await data.json();
    // console.log(jsond);
    const dataj = jsond?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilteredRestaurant(dataj);
    setAllRestaurant(dataj);
    
  } catch (ERR_INTERNET_DISCONNECTED) {
    // if (!isOnline) {
    //   return <h1> 🚧🔴🚧,No Internet Connection, Please Check Your Internet Connection  🚧🔴🚧</h1>;
    // }
    console.log(ERR_INTERNET_DISCONNECTED);
  } finally {
      return <h1> 🚧🔴🚧,No Internet Connection, Please Check Your Internet Connection  🚧🔴🚧</h1>;

  }
}