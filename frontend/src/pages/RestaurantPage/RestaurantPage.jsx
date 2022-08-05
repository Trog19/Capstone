import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./RestaurantPage.css";


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
const navigate = useNavigate()
console.log("params", params)


    async function Restaurants(){
        let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/")
        setRestaurant(response.data);
        console.log("Restaurant Data", response.data)
        let results = response.data.filter(restaurant =>restaurant.id == params.restaurant_id)
        setRestaurant(results)
        console.log("restaurant filter", results)
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
  
          const helperFunction=(value )=>{
            if(value == false){
                return "Not Occupied"
            }
            else{
                return "Occupied"
            }
          }

          const helperFunction2=(value )=>{
            if(value == false){
                return "Available"
            }
            else{
                return "Reserved"
            }
          }
  

  useEffect(() => {
    Menus()
    AllTables()
    AllReservations()
    Restaurants()


  }, []);
  return (
    <div className="Button">

    <div className>
        <div>Restaurant</div>
             <table>
                 <thead>
                     <tr>
                     <th>Name</th>
                     <th>Location</th>
                     <th>Cuisine</th>
                     <th>Description</th>
                     <th>Walk-in Wait Time</th>
                     </tr>
                 </thead>
                 <tbody>
                     {restaurant.map(restaurant=>{
                        return(
                            <tr>
                                {/* <img src={`http://127.0.0.1:8000/${restaurant.image}`}/> */}
                                <td >{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{restaurant.cuisine}</td>
                                <td>{restaurant.info}</td>
                                <td>{restaurant.wait_time} Minutes</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
         <div>
            <div>Drink Menu</div>
            <table>
                <thead>
                    <tr>
                    <th>Drink</th>
                    <th>Description</th>
                    <th>Price</th>
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
        <div>Tables</div>
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
                            <td>{helperFunction(restaurantTable.occupied)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    <div>
        <div>Reservation List</div>
            {false}
            <table className="Reservation">
                <thead className="th">
                    <tr>
                    <th>Time</th>
                    <th>User Name</th>
                    <th>Party Size</th>
                    <th>Table</th>
                    <th>Check In</th>
                    <th>Accepted Status</th>
                    </tr>
                </thead>
                <tbody className="td">
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
        <li>
        <button onClick={()=> navigate("/customerPage")}>Make Reservation!</button>
        </li>
    </div>
  );
};
export default RestaurantPage;
