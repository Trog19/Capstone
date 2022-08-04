import React from "react";
import RestaurantPage from "../../pages/RestaurantPage/RestaurantPage";
import Restaurant from "../Restaurant/Restaurant";
import { Link } from "react-router-dom";
import "./RestaurantMapper"


const RestaurantMapper = ({restaurants})=>{
    return(
        <div className="Mapper">
            {restaurants.map(restaurant => 
            <>
                <Link to={`/restaurantPage/${restaurant.id}`}><div className="Mapper">{restaurant.name}</div></Link>
                <div>{`Restaurant Information: ${restaurant.info}`} </div>
                <img src={`${restaurant.image}`}/>
            </>
            )}
        </div>
      
    );
}
export default RestaurantMapper
