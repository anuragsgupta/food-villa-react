

export const RES_BASE_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export const RES_BASE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// export const RES_BASE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// const indore_res = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export async function fetchRestaurantData(setAllRestaurant,setFilteredRestaurant) {
    const data = await fetch(RES_BASE_URL);
    const jsond =  await data.json();
    console.log(jsond);
    const restaurantsList = jsond.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    const restaurantsList2 = jsond.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    const restaurants = restaurantsList.concat(restaurantsList2);
    // console.log(restaurants);
    setAllRestaurant(restaurants) 
    setFilteredRestaurant(restaurants) 
    // const dataj = jsond?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    return restaurants

}
export function getLatLong() {
    return new Promise((resolve, reject) => {
        // Check if geolocation is supported
        if ("geolocation" in navigator) {
            // Get current position
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const location = { lat: latitude, lng: longitude };
                    resolve(location);
                },
                (error) => {
                    reject("Geolocation error: " + error.message);
                }
            );
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

// Example usage:

