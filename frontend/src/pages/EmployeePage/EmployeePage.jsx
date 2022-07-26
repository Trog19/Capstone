import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Restaurants from "../../components/Restaurants/DisplayRestaurants";


console.log ("Hello world")
const EmployeePage = (props) => {
    const [user, token] = useAuth();

        const[accepted, setAccepted] = useState("")
        const[table_id, setTable_id] = useState("")
        const[name, setName] = useState("")
        const[location, setLocation] = useState("")
        const[drink, setDrink] = useState("")
        const[price, setPrice] = useState("")
        const[description, setDescription] = useState("")
        const[restaurant_id, setRestaurant_id] = useState("")
        const[reservation_id, setReservation_id] = useState("")



        function handleSubmit(event){
            event.preventDefault();
            let newRestaurant = {
                name: name,
                location: location
            };
            console.log(newRestaurant)
            props.PostRestaurant(newRestaurant)
            return(newRestaurant)
            
        }

        function otherSubmit(event){
            event.preventDefault();
            let newDrink ={
                drink: drink,
                price: price,
                description: description,
                restaurant_id: restaurant_id
            };
        console.log(newDrink)
        props.PostDrink(newDrink)
        return(newDrink)
        }

        function additionalSubmit(event){
            event.preventDefault();
            let reservationStatus ={
                table: table_id,
                accept: accepted,
                reservation: reservation_id
            };
            console.log(reservationStatus)
            props.EditReservation(reservationStatus)
            return(reservationStatus)
            }
        return (
            <div>
  <form className = "form" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label>Location</label>
                    <input type='text' value={location} onChange={(event) => setLocation(event.target.value)}/>
                    <button type="submit">Add Restaurant</button>
                </div>
            </form>
            <form className= "form" onSubmit={otherSubmit}>
                <div>
                    <label>Drink</label>
                    <input type='text' value={drink} onChange={(event)=> setDrink(event.target.value)}/>
                    <label>Price</label>
                    <input type= 'int' value={price} onChange={(event)=> setPrice(event.target.value)}/>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(event)=> setDescription(event.target.value)}/>
                    <label>Restaurant ID</label>
                    <input type = 'int' value={restaurant_id} onChange={(event) => setRestaurant_id(event.target.value)}/>
                    <button type="submit">Add Drink</button>
                </div>
            </form>
            <form className="Form" onSubmit={additionalSubmit}>
                <div>
                    <label>Table</label>
                    <input type='int' value={table_id} onChange={(event) => setTable_id(event.target.value)}/>
                    <label>Status</label>
                    <input type='text' value={accepted} onChange={(event) => setAccepted(event.target.value)}/>
                    <label>Reservation Num.</label>
                    <input type='int' value={reservation_id} onChange={(event) => setReservation_id(event.target.value)}/>
                    <button type="submit"> Accept Res.</button>
                </div>

            </form>
                    </div>
          
            
        );
}


export default EmployeePage;



























