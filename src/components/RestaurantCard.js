import { CDN_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data} = props
    const {name,cuisines,avgRatingString,deliveryTime,costForTwo,cloudinaryImageId,sla} = data
    // console.log(`Image ${CDN_IMAGE}/${cloudinaryImageId}`)
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo"
                alt = "res-logo" 
                src={`${CDN_IMAGE}/${cloudinaryImageId}`}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{costForTwo} For Two</h4>
            {/* <h4>{sla.slaString}</h4> */}
        </div>
    )
};


export default RestaurantCard;