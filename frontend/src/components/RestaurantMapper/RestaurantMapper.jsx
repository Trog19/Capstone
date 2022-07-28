import React from "react";
import Restaurant from "../Restaurant/Restaurant";
import Tables from "../Tables/Tables";



const RestaurantMapper = ({restaurants})=>{
    return(

        <div>
            {restaurants.map((restaurants)=><li><Restaurant restaurants={restaurants}/></li>)}
        </div>
      

        
    );
}
export default RestaurantMapper