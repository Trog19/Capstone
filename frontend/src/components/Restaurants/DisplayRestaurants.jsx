import React from "react";

const DisplayRestaurants = (props) => {
    console.log(props.restaurants)

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {props.restaurants.map(restaurants=>{
                        return(
                            <tr>
                                <td>{restaurants.name}</td>
                                <td>{restaurants.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayRestaurants;