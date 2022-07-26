import React from "react";

const DisplayMenu = (props) => {
    console.log(props.menu)

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Drink</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Restaurant</th>
                    </tr>
                </thead>
                <tbody>
                    {props.menu.map(menu=>{
                        return(
                            <tr>
                                <td>{menu.drink}</td>
                                <td>{menu.description}</td>
                                <td>{menu.price}</td>
                                <td>{menu.restaurant_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayMenu;