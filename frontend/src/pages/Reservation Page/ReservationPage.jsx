import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const ReservationPage = (props) => {
    const EditReservation = async (data) => {
        console.log('edit data', data)
        try {
        let response = await axios.patch(`http://127.0.0.1:8000/api/reservations/${reservation_id}/`, data, {
            headers: {
            Authorization: "Bearer " + token
            }
        })
        setReservation(response.data)
        console.log(response.data)
        } catch (error) {
        console.log(error)  
        }
    }

    const GetReservations = async (data) => {
        console.log(data)
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/reservations/${user_id}/`, data, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
        } catch (error) {
          console.log(error)
        }
      }
}

export default ReservationPage