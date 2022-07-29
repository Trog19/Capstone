import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
const [user, token] = useAuth();
const [menu, setMenu] = useState([])
const [table, setTables] = useState([])
const [reservation, setReservation] = useState([])
const [restaurant, setRestaurant] = useState([])
const [restaurantMenu, setRestaurantMenu] = useState([])
const [restaurantTable, setRestaurantTable] = useState([])
const [restaurantReservation, setRestaurantReservation] = useState([])
const params = useParams()
console.log("params", params)


    async function Restaurants(){
        let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/")
        setRestaurant(response.data);
        console.log("Restaurant Data", response.data)
        let restaurantFilter = response.data.filter(restaurant =>restaurant.id == params.restaurant_id)
        console.log("restaurant filter", restaurantFilter)
    }

    async function Menus(){
        let response = await axios.get("http://127.0.0.1:8000/api/menu/all/");
        setMenu(response.data);
        console.log("Menu Data", response.data)
        let results = response.data.filter(el =>el.restaurant_id == params.restaurant_id)
        setRestaurantMenu(results);
        console.log("menu filter", results)
          } 

    async function AllTables(){
            let response = await axios.get("http://127.0.0.1:8000/api/table/all/");
            setTables(response.data);
            console.log("Table Data", response.data)
            let results = response.data.filter(el =>el.restaurant_id == params.restaurant_id)
            setRestaurantTable(results)
            console.log("table filter", results)
          }

    async function AllReservations(){
            let response = await axios.get("http://127.0.0.1:8000/api/reservations/all/");
            setReservation(response.data);
            console.log("Reservations", response.data)
            let results = response.data.filter(el =>el.restaurant_id == params.restaurant_id)


            setRestaurantReservation(results)
            console.log("reservation filter", results)  
          }
  

  

  useEffect(() => {
    Menus()
    AllTables()
    AllReservations()
    Restaurants()


  }, []);
  return (
    <div>
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
                    {restaurantMenu.map(restaurantMenu=>{
                        return(
                            <tr>
                                <td>{restaurantMenu.drink}</td>
                                <td>{restaurantMenu.description}</td>
                                <td>{restaurantMenu.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Seats</th>
                    <th>Occupied</th>
                </tr>
            </thead>
            <tbody>
                {restaurantTable.map(restaurantTable=>{
                    return(
                        <tr>
                            <td>{restaurantTable.number}</td>
                            <td>{restaurantTable.seats}</td>
                            <td>{restaurantTable.occupied.toString()}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    <div>
            {false}
            <table>
                <thead>
                    <tr>
                    <th>Time</th>
                    <th>User Name</th>
                    <th>Party Size</th>
                    <th>Table</th>
                    <th>Check In</th>
                    <th>Accepted Status</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurantReservation.map(restaurantReservation=>{
                        return(
                            <tr>
                                <td>{restaurantReservation.time}</td>
                                <td>{restaurantReservation.user_name}</td>
                                <td>{restaurantReservation.party_size}</td>
                                <td>{restaurantReservation.table_id}</td>
                                <td>{restaurantReservation.check_in.toString()}</td>
                                <td>{restaurantReservation.accepted.toString()}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    </div>
  );
};
export default RestaurantPage;
