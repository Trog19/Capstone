import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";



console.log("Hello World")
const CustomerPage = (props) => {
    const[user, token] = useAuth();
    const[restaurant_id, setRestaurant] = useState("")
    const[time, setTime] = useState("")
    const[party_size, setParty_Size] = useState("")
    const[table_id, setTable_id] = useState("")
    const[drinks, setDrinks]=useState("")
    const[reservation_id, setReservation_id] = useState("")
    const[check_in, setCheck_in] = useState("")
    const[user_name, setUser_name] = useState("")
    const[reservation, setReservation] = useState("")
    



    const PostReservation = async (data) => {
        console.log(data)
        try {
          let response = await axios.post("http://127.0.0.1:8000/api/reservations/", data, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          console.log(response.data)
        } catch (error) {
          console.log(error.message
            
            )
        }
        
      }

      const PostOrder = async (data) => {
        console.log(data)
        try {
          let response = await axios.post("http://127.0.0.1:8000/api/order/", data, {
            headers: {
              Authorization: "Bearer" + token
        } 
          })
          console.log(response.data)
        }catch (error) {
          console.log(error)
        }
      }

      const EditReservation = async (data) => {
        console.log(data)
        try {
          let response = await axios.patch("http://127.0.0.1:8000/api/reservations/8/", data, {
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


    function handleSubmit(event){
        event.preventDefault();
        let newReservation = {
            user_name: user_name,
            party_size: parseInt(party_size),
            time: parseInt(time),
            restaurant_id: parseInt(restaurant_id)
 
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
        restaurant: restaurant_id
    };
    console.log(newOrder)
    props.PostOrder(newOrder)
    return(newOrder)
}

function additionalSubmit(event){
    event.preventDefault();
    let checkIn={

        reservation: reservation_id,
        arrived: check_in
    };
    console.log(checkIn)
    props.EditReservation(checkIn)
    return(checkIn)
}

useEffect(() => {
    PostReservation()
    PostOrder()
    EditReservation()
  }, []);

    return(
        <div>
            <div></div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type='text' value={user_name} onChange={(event)=> setUser_name(event.target.value)}/>
                    <label>Party Size</label>
                    <input type='int' value={party_size} onChange={(event) => setParty_Size(event.target.value)}/>
                    <label>Reservation Time</label>
                    <input type='int' value={time} onChange={(event) => setTime(event.target.value)}/>
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
            <form className="form" onSubmit={additionalSubmit}>
                <div>
                    <label>Reservation</label>
                    <input type='int' value={reservation_id} onChange={(event)=> setReservation_id(event.target.value)}/>
                    <label>Arrived</label>
                    <input type='text ' value={check_in} onChange={(event)=> setCheck_in(event.target.value)}/>
                    <button type="submit">Check In!</button>
                </div>
            </form>
        </div>


    )

}

export default CustomerPage;