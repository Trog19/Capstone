import React from "react";


const Tables = ({table}) => {

    return(
    <tr>
        <td>{table.restaurant_id}</td>
        <td>{table.id}</td>
        <td>{table.number}</td>
        <td>{table.seats}</td>
        <td>{table.occupied.toString()}</td>
    </tr>
    );

}

export default Tables