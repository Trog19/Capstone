import React from "react";
import RestaurantPage from "../../pages/RestaurantPage/RestaurantPage";
import Restaurant from "../Restaurant/Restaurant";
import { Link } from "react-router-dom";
import "./RestaurantMapper"


const RestaurantMapper = ({restaurants})=>{
    return(
        <div >
            <div className="Mapper">
            {restaurants.map(restaurant => <Link to={`/restaurantPage/${restaurant.id}`}>{restaurant.name}</Link>)}
            </div>        
        </div>
      
    );
}
export default RestaurantMapper





// <div>
// {restaurants.map((restaurants)=><li><Restaurant restaurants={restaurants}/></li>)}
// </div>