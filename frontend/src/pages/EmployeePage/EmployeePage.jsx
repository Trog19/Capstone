import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Restaurants from "../../components/Restaurants/GetAllRestaurants";


console.log ("Hello world")
const EmployeePage = (props) => {
    const [user, token] = useAuth();

    
        const[name, setName] = useState("")
        const[location, setLocation] = useState("")

        function handleSubmit(event){
            event.preventDefault();
            let newRestaurant = {
                name: name,
                location: location
            };
            console.log(newRestaurant)
            props.PostRestaurant(newRestaurant)
            return(newRestaurant)
            
        }
        return (
            <form className = "form" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label>Location</label>
                    <input type='text' value={location} onChange={(event) => setLocation(event.target.value)}/>
                    <button type="submit">Add Restaurant</button>
                </div>
            </form>
            
        );

}


export default EmployeePage;




























// useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/restaurant/all/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setRestaurant(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchRestaurants();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Employee Page for {user.username}!</h1>
//       {restaurant &&
//         restaurant.map((restaurant) => (
//           <p key={restaurant.id}>
//             {restaurant.id} {restaurant.name} {restaurant.location}
//           </p>
//         ))}
//     </div>
//   );
// };

// export default EmployeePage;
