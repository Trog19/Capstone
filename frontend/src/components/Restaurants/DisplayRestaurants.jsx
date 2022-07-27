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

  async function AllRestaurants1(id){
    let response = await axios.get(`http://127.0.0.1:8000/api/restaurant/${id}`);
    setRestaurants(response.data);
    console.log("Restaurant Data", response.data)
    console.log("Restaurant ID", response.id)
  }
  useEffect(()=>{
 AllRestaurants()
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
                                <td ><a onClick={()=>AllRestaurants1(restaurants.id)}>{restaurants.name}</a></td>
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