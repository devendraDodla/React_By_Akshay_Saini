import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setRestInfo] = useState(null)
    // console.log("THE RESID",resId)
    // console.log("API","https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+resId)
    // const data = await fetch(MENU_API.replace("$",resId));
    // const json = await data.json()
    // const res = json.data;
    // console.log("THe daata", json.data)
    // console.log("THE CUISINES", res?.cards[2]?.card?.card.info)
    // console.log("THE Item cards", res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    useEffect(() => {
        fetchData(resId);
    }, [])

    const fetchData = async (resId) => {
        const data = await fetch(MENU_API + resId);
        
        const json = await data.json()

        setRestInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;