import RestaurantCard, {withPromotedLabel}from "./RestaurantCard"; 
import swiggyObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

  
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRes, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
      fetchData(pageNumber);
      // Add an event listener for scroll
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    useEffect(() => {
      if (isFetching) fetchData(pageNumber);
    }, [isFetching]);

    const fetchData = async (page) => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}`
        );
        const response = await data.json();
        const res =
          response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setListOfRestaurants((prevRestaurants) => [...prevRestaurants, ...res]);
        setFilteredRest((prevRestaurants) => [...prevRestaurants, ...res]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setIsFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setIsFetching(true);
    };
    
    const RestaurantPromoted = withPromotedLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're in offline</h1>
    if(listOfRestaurants.length === 0) {
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
            <Link key = {res.data?.id}
              to = {`/restaurants/${res.info.id}`}
            >
              {res.info.avgRating > 4 ? <RestaurantPromoted key= {res.info.id} data = {res.info} /> : 
                <RestaurantCard key={res.info.id} data={res.info} />
              } 
            </Link>
            
          ))}
        </div>
        {isFetching && <p>Loading more restaurants...</p>}
      </div>
    );
};

export default Body;