import React from "react";
import Restaurant from "../Restaurant/Restaurant";


const RestaurantMapper = ({restaurants})=>{
    return(

        <div>
            {restaurants.map((restaurants)=><li><Restaurant restaurants={restaurants}/></li>)}
        </div>
      

        
    );
}
export default RestaurantMapper