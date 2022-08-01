import React from "react";
import Restaurant from "../Restaurant/Restaurant";


const RestaurantMapper = ({restaurants})=>{
    return(

        <div>
            {restaurants.map((restaurants)=><li><Restaurant restaurants={restaurants}/></li>)}
            <li></li>
        </div>
      

        
    );
}
export default RestaurantMapper