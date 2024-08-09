import RestaurantCard from "./RestaurantCard"; 
import swiggyObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

  
const Body = () => {
    // const filteringRestaurant = () => {

    // }
    // Local state variable
    const [listOfRestuarents,setListOfRestuarents] = useState([])
    const [filteredRes, setFilteredRest] = useState([])

    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                    );
            const response = await data.json();
            const res = response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestuarents(res);
            setFilteredRest(res);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're in offline</h1>
    if(listOfRestuarents.length === 0) {
        return <Shimmer/>
    }
    // let listOfRestuarents = swiggyObj
    console.log("Rendering")
    return (
      <div className="body">
        <div className="flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-1 py-1 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filterRes = listOfRestuarents.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRest(filterRes);
              }}
            >
              Search
            </button>
          </div>
          <div className="m-8 p-4">
            <button
              className="px-0.5 py-0.5 bg-gray-200 rounded-lg"
              onClick={() => {
                const result = listOfRestuarents.filter(
                  (res) => res.info.avgRating > 4
                );
                // console.log(result[0])
                setListOfRestuarents(result);
                // console.log(listOfRestuarents.length)
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRes.map((res) => (
            <RestaurantCard key={res.info.id} data={res.info} />
          ))}
        </div>
      </div>
    );
};

export default Body;