import React, { useEffect, useState } from "react";
import axios from "axios";


const DisplayRestaurants = (props) => {
    console.log(props.restaurants)
    const [restaurants, setRestaurants] = useState([]);
    const [token, setToken] = useState([]);


  async function AllRestaurants(){
    let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/");
    setRestaurants(response.data);
    console.log("Restaurant Data", response.data)
  }

  const RestaurantsID= async (id)=>{
    try{
    let response = await axios.get(`http://127.0.0.1:8000/api/restaurant/${id}`, id,{
      headers: {
        Authorization: "Bearer " + token
      }
    });
    setRestaurants(response.data);
    console.log(token)
    console.log("Restaurant Data", response.data)
    console.log("Restaurant ID", response.id)
  }catch(error){

  }
  }
  useEffect(()=>{
 AllRestaurants()
 RestaurantsID()
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
                                <td ><a onClick={()=>RestaurantsID(restaurants.id)}>{restaurants.name}</a></td>
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