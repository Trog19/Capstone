import React, { useEffect, useState } from "react";
import axios from "axios";


const DisplayRestaurants = (props) => {
    console.log(props.restaurants)
    const [restaurants, setRestaurants] = useState([]);
    
  async function AllRestaurants(){
    let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/");
    setRestaurants(response.data);
    console.log("Restaurant Data", response.data)
  }

  const RestaurantSearch = (searchTerm)=>{
    let results = restaurants.filter((restaurant) => {
      if(restaurant.name.includes(searchTerm) || restaurant.location.includes(searchTerm)){
        return true;
      }
    }
    );setRestaurants(results)
    console.log("Restaurant Search", results.data)
  }
  useEffect(()=>{
 AllRestaurants()
 RestaurantSearch()
  }, [])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Cuisine</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map(restaurants=>{
                        return(
                            <tr>
                                <td>{restaurants.name}</td>
                                <td>{restaurants.location}</td>
                                <td>{restaurants.cuisine}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayRestaurants;