import React from "react";




const Restaurant = ({restaurants}) =>{

    return(
        <tr>
        <td ><a>{restaurants.name}</a></td>
        <td>{restaurants.location}</td>
        <td>{restaurants.cuisine}</td>
    </tr>
    );
}

export default Restaurant