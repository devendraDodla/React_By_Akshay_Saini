import { CDN_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data} = props
    const {name,cuisines,avgRatingString,deliveryTime,costForTwo,cloudinaryImageId,sla} = data
    // console.log(`Image ${CDN_IMAGE}/${cloudinaryImageId}`)
    return (
        <div className="w-[200px] p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 transition-transform duration-300">
            <img 
                className="w-[180px] h-[160px] rounded-lg"
                alt = "res-logo" 
                src={`${CDN_IMAGE}/${cloudinaryImageId}`}>
            </img>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{costForTwo} For Two</h4>
            {/* <h4>{sla.slaString}</h4> */}
        </div>
    )
};


export default RestaurantCard;