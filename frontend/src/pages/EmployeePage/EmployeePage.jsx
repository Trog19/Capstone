import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";



console.log ("Hello world")
const EmployeePage = (props) => {
    const [user, token] = useAuth();

        const[accepted, setAccepted] = useState("")
        const[table_id, setTable_id] = useState("")
        const[name, setName] = useState("")
        const[location, setLocation] = useState("")
        const[cuisine, setCuisine] = useState("")
        const[drink, setDrink] = useState("")
        const[price, setPrice] = useState("")
        const[description, setDescription] = useState("")
        const[restaurant_id, setRestaurant_id] = useState("")
        const[reservation_id, setReservation_id] = useState("")
        const[reservation, setReservation] = useState("")
        const[user_id, setUser_id] = useState("")
        const[number, setNumber] = useState("")
        const[seats, setSeats] = useState("")




        const PostRestaurant = async (data) => {
            console.log(data)
            try {
              let response = await axios.post("http://127.0.0.1:8000/api/restaurant/", data, {
                headers: {
                  Authorization: "Bearer " + token
                }
              })
              console.log(response.data)
            } catch (error) {
              console.log(error)
            }
            
          }

        const PostDrink = async (data) => {
        console.log(data)
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/menu/", data, {
            headers: {
                Authorization: "Bearer " + token
            }
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        
        }

        const PostTable = async (data) => {
            console.log(data)
            try {
                let response = await axios.post("http://127.0.0.1:8000/api/table/", data, {
                headers: {
                    Authorization: "Bearer " + token
                }
                })
                console.log(response.data)
            } catch (error) {
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
            let newRestaurant = {
                name: name,
                location: location,
                cusisine: cuisine
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



        function extraSubmit(event){
            event.preventDefault();
            let NewTable={
                restaurant_id: restaurant_id,
                user_id: user_id,
                number: number,
                seats: seats
            };
            props.PostTable(NewTable)
            return(NewTable)
        }



            useEffect(() => {
                PostRestaurant()
                EditReservation()
                PostDrink()
                PostTable()
              }, []);
        return (
            <div>
                <header>CREATE RESTAURANT</header>
  <form className = "form" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label>Location</label>
                    <input type='text' value={location} onChange={(event) => setLocation(event.target.value)}/>
                    <label>Cuisine</label>
                    <input type='text' value={cuisine} onChange={(event) => setCuisine(event.target.value)}/>
                    <button type="submit">Add Restaurant</button>
                </div>
            </form>
            <header>ADD DRINKS</header>
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
            <header>ACCEPT RESERVATION</header>
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
            <header>ADD TABLE</header>
            <form className="Form" onSubmit={extraSubmit}>
                <div>
                    <label>Restaurant ID</label>
                    <input type='int' value={restaurant_id} onChange={(event) => setRestaurant_id(event.target.value)}/>
                    <label>Employee ID</label>
                    <input type='text' value={user_id} onChange={(event) => setUser_id(event.target.value)}/>
                    <label>Table Number</label>
                    <input type='int' value={number} onChange={(event) => setNumber(event.target.value)}/>
                    <label>Number of Seats</label>
                    <input type ='int' value={seats} onChange={(event)=> setSeats(event.target.value)}/>
                    <button type="submit"> Add Table.</button>
                </div>
            </form>
            </div>
          
            
        );
}


export default EmployeePage;




















