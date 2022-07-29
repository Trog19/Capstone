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
import RestaurantMapper from "./components/RestaurantMapper/RestaurantMapper";



// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";


function App() {
  const [menu, setMenu] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [user, token] = useAuth();
  const [drink, setDrink] = useAuth();
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState ([]);
  const [table, setTable] = useState([]);
  const [restaurant, setRestaurant] = useState([]);



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

  

  




// async function AllRestaurants(){
//   let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/");
//   setRestaurants(response.data);
//   console.log("Restaurant Data", response.data)
// }

// useEffect(()=>{
//   AllRestaurants()
//    }, [])

 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
                <SearchBar RestaurantSearch={RestaurantSearch}/>
                <RestaurantMapper restaurants={restaurants} />
            </PrivateRoute>
          }
        />
        <Route path="/employeePage/" element={<EmployeePage></EmployeePage>}></Route>
        <Route path="/restaurantPage/:restaurant_id" element={<RestaurantPage></RestaurantPage>}></Route>
        <Route path="/customerPage" element={<CustomerPage></CustomerPage>}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
