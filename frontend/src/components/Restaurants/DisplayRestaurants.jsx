// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";


// const DisplayRestaurants = (props) => {
//     console.log(props.restaurants)
//     // const [restaurants, setRestaurants] = useState([]);
//     const [user, token] = useAuth();



// //   const RestaurantsID= async (id)=>{
// //     try{
// //     let response = await axios.get(`http://127.0.0.1:8000/api/restaurant/${id}`,{
// //       headers: {
// //         Authorization: "Bearer " + token
// //       }
// //     });
// //     setRestaurants(response.data);
// //     console.log(token)
// //     console.log("Restaurant Data", response.data)
// //     console.log("Restaurant ID", response.id)
// //   }catch(error){

// //   }
// //   }
// //   useEffect(()=>{
// //  AllRestaurants()
// //   }, [])
//     return(
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                     <th>Name</th>

//                     <th>Location</th>
//                     <th>Cuisine</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.restaurants.map(restaurants=>{
//                         return(
//                             <tr>
//                                 <td ><a>{restaurants.name}</a></td>
//                                 <td>{restaurants.location}</td>
//                                 <td>{restaurants.cuisine}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }



// export default DisplayRestaurants;