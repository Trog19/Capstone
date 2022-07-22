import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Restaurants from "../../components/Restaurants/GetAllRestaurants";
import axios from "axios";


console.log("Hello World")
const CustomerPage = (props) => {
    const [user, token] = useAuth();

    const[reservationTime, setReservationTime] = useState("")
    const[partySize, setPartySize] = useState("")
    
}