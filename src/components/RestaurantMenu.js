import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=367769&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        setResInfo(json.data);
        
    }
    if(resInfo === null) return <Shimmer />
    console.log("JSON",resInfo)
    console.log("THe tex",resInfo?.cards[0]?.card?.card?.text)
    
    return (
        <div>

            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burgers</li>
                <li>Diet Cake</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;