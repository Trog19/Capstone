import React from "react";




const Restaurant = ({restaurants}) =>{

    return(
    <tr>
        <td>{restaurants.name}</td>
        <td>{restaurants.location}</td>
        <td>{restaurants.cuisine}</td>
        <td>{restaurants.id}</td>
    </tr>
    );
}

export default Restaurant