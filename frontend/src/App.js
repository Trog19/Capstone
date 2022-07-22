// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  async function PostRestautant(newRestaurant){
    let response = await axios.post('http://127.0.0.1:8000/api/restaurant/', newRestaurant); 
    if(response.status===201){
      // GetAllRestaurants()
    }
  }




  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <EmployeePage postRestautamt={PostRestautant}/>
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
