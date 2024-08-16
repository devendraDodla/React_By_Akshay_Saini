import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./ResCategory";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return <Shimmer/>;
    
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    return (
        <div className="text-center">
            <h1 className="font-semibold my-10 text-2xl">{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category) => (
                <RestCategory data = {category?.card?.card} />
            ))}
        </div>
    )
};

export default RestaurantMenu;