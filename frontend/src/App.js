// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import useAuth from "./hooks/useAuth";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import SearchBar from "./components/SearchBar/SearchBar";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DisplayRestaurants from "./components/Restaurants/DisplayRestaurants";
import DisplayReservations from "./components/DisplayReservations/DisplayReservations";
import DisplayTables from "./components/DisplayTables/DisplayTables";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import DisplayMenu from "./components/DisplayMenu/DisplayMenu";


function App() {
  const [menu, setMenu] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [user, token] = useAuth();
  const [drink, setDrink] = useAuth();
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState ([]);
  const [table, setTable] = useState([]);



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


  const RestaurantSearch = (searchTerm)=>{
    let results = restaurants.filter((restaurant) => {
      if(restaurant.name.includes(searchTerm) || restaurant.location.includes(searchTerm) || restaurant.cuisine === (searchTerm)){
        return true;
      }
    }
    );setRestaurants(results)
    console.log("Restaurant Search", results.data)
    return(setRestaurants)
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
      console.log(error.message
        
        )
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

// const RestaurantID= async (id)=>{
//   try{
//   let response = await axios.get(`http://127.0.0.1:8000/api/restaurant/${id}`, id,{
//     headers: {
//       Authorization: "Bearer " + token
//     }
//   });
//   setRestaurants(response.data);
// }catch(error){
//   console.log("Restaurant Data", response.data)
//   console.log("Restaurant ID", response.id)
// }
// }

 

  return (
    <div>
      <Navbar />
      <SearchBar RestaurantSearch={RestaurantSearch}/>
      <DisplayRestaurants />
      <DisplayMenu menu ={menu}/>      
      <DisplayReservations reservations ={reservations}/> 
      <DisplayTables table={table}/>
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
