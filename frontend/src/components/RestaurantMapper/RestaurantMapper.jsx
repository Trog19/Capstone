import React from "react";
import RestaurantPage from "../../pages/RestaurantPage/RestaurantPage";
import Restaurant from "../Restaurant/Restaurant";
import { Link } from "react-router-dom";
import "./RestaurantMapper.css"


const RestaurantMapper = ({restaurants})=>{
    return(
        <div className="scrollbar">
            <p>Welcome to Wait-Less! The new way of finding where and when to eat. Please pick from an option below or look for something new with the search bar!</p>
            {restaurants.map(restaurant => 
            <>
                <Link to={`/restaurantPage/${restaurant.id}`}><div>{restaurant.name}</div></Link>
                <div >{`Restaurant Information: ${restaurant.info}`} </div>
                <img src={`http://127.0.0.1:8000${restaurant.image}`}/>
                <img/>
            </>
            )}
        </div>
      
    );
}
export default RestaurantMapper
