// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {postRestaurant} from "./pages/EmployeePage/EmployeePage";
import Res from "./components/Restaurants/GetAllRestaurants";
import EmployeePage from "./pages/EmployeePage/EmployeePage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [reservation, setReservation] = useState([]);


  async function GetAllRestaurants(){
    let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/");
    setRestaurant(response.data);
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

  async function PostRestaurant(newRestaurant){
    let response = await axios.post('http://127.0.0.1:8000/api/restaurant/', newRestaurant); 
    if(response.status===201){
      GetAllRestaurants()
    }
  }




  return (
    <div>
      <Navbar />
      <EmployeePage PostRestaurant={PostRestaurant}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
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
