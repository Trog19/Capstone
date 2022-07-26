//Create table to show reservations to both employees and customers
//This data will be used to update wait time
//Possibly incriment wait time by 30 minutes for each table?

import axios from "axios";
import React, {useEffect, useState} from "react";


const DisplayReservations = (props) =>{
    console.log(props.reservations)
    const[reservations, setReservations] =useState([]);

async function AllReservations(){
    let response = await axios.get("http://127.0.0.1:8000/api/reservations/all/");
    setReservations(response.data);
    console.log("Reservations", response.data)
  }
  useEffect(()=>{
    AllReservations()
  }, [])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Time</th>
                    <th>Last Name</th>
                    <th>Party Size</th>
                    <th>Restaurant</th>
                    <th>Table</th>
                    <th>Check In</th>
                    <th>Accepted Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservations=>{
                        return(
                            <tr>
                                <td>{reservations.time}</td>
                                <td>{reservations.last_name}</td>
                                <td>{reservations.party_size}</td>
                                <td>{reservations.restaurant_id}</td>
                                <td>{reservations.table_id}</td>
                                <td>{reservations.check_in}</td>
                                <td>{reservations.accepted}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayReservations;