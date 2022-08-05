import React from "react";
import RestaurantPage from "../../pages/RestaurantPage/RestaurantPage";
import Restaurant from "../Restaurant/Restaurant";
import { Link } from "react-router-dom";
import "./RestaurantMapper.css"


const RestaurantMapper = ({restaurants})=>{
    return(
        <div className="Mapper">
            <div>Welcome to Wait-Less! The new way of finding where and when to eat.</div>
            {restaurants.map(restaurant => 
            <>
                <img src={`http://127.0.0.1:8000${restaurant.image}`}/>
                <Link className="Mapper" to={`/restaurantPage/${restaurant.id}`}><div className="Mapper">{restaurant.name}</div></Link>
                <div className="Mapper">{`Restaurant Information: ${restaurant.info}`} </div>
                <img/>
            </>
            )}
        </div>
      
    );
}
export default RestaurantMapper
