import React, { useEffect, useState } from "react";
import axios from "axios";





const DisplayMenu = (props) => {
    console.log(props.menu)
    const[menu, setMenu] =useState([]);



async function AllMenus(){
    let response = await axios.get("http://127.0.0.1:8000/api/menu/all/");
    setMenu(response.data);
    console.log("Menu Data", response.data)
      }    
      useEffect(()=>{
        AllMenus()
      }, [])


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
                    {menu.map(menu=>{
                        return(
                            <tr>
                                <td>{menu.drink}</td>
                                <td>{menu.description}</td>
                                <td>{menu.price}</td>
                                <td>{menu.restaurant_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayMenu;