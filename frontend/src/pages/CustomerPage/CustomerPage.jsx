import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Restaurants from "../../components/Restaurants/GetAllRestaurants";
import axios from "axios";


console.log("Hello World")
const CustomerPage = (props) => {
    const [user, token] = useAuth();
    const[restaurant_id, setRestaurant] = useState("")
    const[reservationTime, setReservationTime] = useState("")
    const[party_size, setParty_Size] = useState("")
    const[userName, setUserName] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newReservation = {
            userName: userName,
            party_size: party_size,
            reservationTime: reservationTime,
            restaurant_id: restaurant_id
        };
        console.log(newReservation)
        props.PostReservation(newReservation)
        return(newReservation)
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type={'text'} value={userName} onChange={(event)=> setUserName(event.target.value)}/>
                    <label>Party Size</label>
                    <input type={'int'} value={party_size} onChange={(event) => setParty_Size(event.target.value)}/>
                    <label>Reservation Time</label>
                    <input type={'int'} value={reservationTime} onChange={(event) => setReservationTime(event.target.value)}/>
                    <label>Restaurant</label>
                    <input type={'int'} value={restaurant_id} onChange={(event) => setRestaurant(event.target.value)}/>
                    <button type="submit">Set Reservation</button>
                </div>
            </form>
        </div>
    )

}

export default CustomerPage;