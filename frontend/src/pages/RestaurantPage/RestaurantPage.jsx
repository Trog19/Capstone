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
const params = useParams()
console.log("params", params)

    async function Restaurants(){
        let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/")
        setRestaurant(response.data);
        console.log("Restaurant Data", response.data)
        let restaurantFilter = response.data.filter(el =>el.id == params)
        console.log("restaurant filter", restaurantFilter)
    }

    async function Menus(){
        let response = await axios.get("http://127.0.0.1:8000/api/menu/all/");
        setMenu(response.data);
        console.log("Menu Data", response.data)
        let restaurantMenu = response.data.filter(el =>el.restaurant_id == params.restaurant_id)
        console.log("menu filter", restaurantMenu)
          } 

    async function AllTables(){
            let response = await axios.get("http://127.0.0.1:8000/api/table/all/");
            setTables(response.data);
            console.log("Table Data", response.data)
            let restaurantTable = response.data.filter(el =>el.restaurant_id == params.restaurant_id)
            console.log("table filter", restaurantTable)
          }

    async function AllReservations(){
            let response = await axios.get("http://127.0.0.1:8000/api/reservations/all/");
            setReservation(response.data);
            console.log("Reservations", response.data)
            let restaurantReservation = response.data.filter(el =>el.restaurant_id == params.restaurant_id)
            console.log("reservation filter", restaurantReservation)  
          }
  

  

  useEffect(() => {
    Menus()
    AllTables()
    AllReservations()
    Restaurants()


  }, []);
  return (
    <div>
        {params.restaurantId}
    </div>
  );
};

export default RestaurantPage;
