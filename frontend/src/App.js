// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {postRestaurant} from "./pages/EmployeePage/EmployeePage";
import {reservation_id} from "./pages/EmployeePage/EmployeePage";
import useAuth from "./hooks/useAuth";
import EmployeePage from "./pages/EmployeePage/EmployeePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DisplayRestaurants from "./components/Restaurants/DisplayRestaurants";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import DisplayMenu from "./components/DisplayMenu/DisplayMenu";


function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [user, token] = useAuth();
  const [drink, setDrink] = useAuth();
  const [restaurant, setRestaurant] = useState([]);
  const [reservations, setReservations] = useState ([]);

  async function AllRestaurants(){
    let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/");
    setRestaurants(response.data);
    console.log("Restaurant Data", response.data)
  }

  const RestaurantSearch = (searchTerm)=>{
    let results = restaurant.filter((restaurant) => {
      if(restaurant.name.includes(searchTerm) || restaurant.location.includes(searchTerm)){
        return true;
      }
    }
    );setRestaurant(results)
    console.log("Restaurant Search", results.data)
  }

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

  async function AllMenus(){
    let response = await axios.get("http://127.0.0.1:8000/api/menu/all/");
    setMenu(response.data);
    console.log("Menu Data", response.data)
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

  async function DisplayReservations(){
    let response = await axios.get("http://127.0.0.1:8000/api/reservations/all/");
    setReservations(response.data);
    console.log("Reservations", response.data)
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

  useEffect(()=>{
    AllRestaurants()
  },[])

  useEffect(()=>{
    AllMenus ()
  },[])

  useEffect(()=>{
    DisplayReservations()
  },[])


  return (
    <div>
      <Navbar />
      <DisplayRestaurants restaurants ={restaurants}/>
      <DisplayMenu menu ={menu}/>      
      {/* <DisplayReservations reservations ={reservations}/> */}
      <EmployeePage PostRestaurant={PostRestaurant} PostDrink={PostDrink} EditReservation={EditReservation}/>
      <CustomerPage PostReservation={PostReservation} PostOrder={PostOrder} EditReservation={EditReservation}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
