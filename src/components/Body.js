import RestaurantCard from "./RestaurantCard"; 
import swiggyObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

  
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
          setListOfRestuarents(swiggyObj);
          setFilteredRest(swiggyObj)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
      
    if(listOfRestuarents.length === 0) {
        return <Shimmer/>
    }
    // let listOfRestuarents = swiggyObj
    console.log("Rendering")
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type = "text" className="search-box" 
                        value = {searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}/>
                    <button onClick={() => {
                        const filterRes = listOfRestuarents.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRest(filterRes)
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const result = listOfRestuarents.filter((res) => res.info.avgRating > 4)
                    // console.log(result[0])
                    setListOfRestuarents(result)
                    // console.log(listOfRestuarents.length)
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRes.map((res) => (
                    <RestaurantCard key = {res.info.id} data = {res.info} />
                ))}
            </div>
        </div>
    )
};

export default Body;