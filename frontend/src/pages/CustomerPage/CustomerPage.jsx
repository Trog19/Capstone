import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Restaurants from "../../components/Restaurants/DisplayRestaurants";
import axios from "axios";



console.log("Hello World")
const CustomerPage = (props) => {
    const [user, token] = useAuth();
    const[restaurant_id, setRestaurant] = useState("")
    const[reservationTime, setReservationTime] = useState("")
    const[party_size, setParty_Size] = useState("")
    const[userName, setUserName] = useState("")
    const[table_id, setTable_id] = useState("")
    const[drinks, setDrinks]=useState("")
    const[reservation_id, setReservation_id] = useState("")




    function handleSubmit(event){
        event.preventDefault();
        let newReservation = {
            userName: userName,
            party_size: party_size,
            reservationTime: reservationTime,
            restaurant: restaurant_id
        };
        console.log(newReservation)
        props.PostReservation(newReservation)
        return(newReservation)
    }

    function otherSubmit(event){
    event.preventDefault();
    let newOrder={
        table: table_id,
        reservation: reservation_id,
        drinks: drinks,
        resttaurant: restaurant_id
    };
    console.log(newOrder)
    props.PostOrder(newOrder)
    return(newOrder)
}
    return(
        <div>
            <div></div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={userName} onChange={(event)=> setUserName(event.target.value)}/>
                    <label>Party Size</label>
                    <input type='int' value={party_size} onChange={(event) => setParty_Size(event.target.value)}/>
                    <label>Reservation Time</label>
                    <input type='int' value={reservationTime} onChange={(event) => setReservationTime(event.target.value)}/>
                    <label>Restaurant</label>
                    <input type='int' value={restaurant_id} onChange={(event) => setRestaurant(event.target.value)}/>
                    <button type="submit">Set Reservation</button>
                </div>
            </form>
            <form className="form" onSubmit={otherSubmit}>
                <div>
                    <label>Table Number</label>
                    <input type='int' value={table_id} onChange={(event)=> setTable_id(event.target.value)}/>
                    <label>Reservation Number</label>
                    <input type='int' value={reservation_id} onChange={(event)=> setReservation_id(event.target.value)}/>
                    <label>Drinks</label>
                    <input type= 'text' value={drinks} onChange={(event) => setDrinks(event.target.value)}/>
                    <label>Restaurant</label>
                    <input type='int' value={restaurant_id} onChange={(event) => setRestaurant(event.target.value)}/>
                    <button type="submit">Submit Order</button>
                </div>

            </form>
        </div>
    )

}

export default CustomerPage;