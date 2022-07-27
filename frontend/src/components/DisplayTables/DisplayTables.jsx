//cereate table that will display all filtered and mapped table
//all table both open and occupied will be displayed to the employee
//only the filtered table by id will be displayed to the customer
//once customer checks in it will rerender the filtered by occupied so the emoloyee has accurate information

import React, { useEffect, useState } from "react";
import axios from "axios";


const DisplayTables = (props) => {
    console.log(props.table)
    const [table, setTables] = useState([]);
    const [token, setToken] = useState([]);


  async function AllTables(){
    let response = await axios.get("http://127.0.0.1:8000/api/table/all/");
    setTables(response.data);
    console.log("Table Data", response.data)
  }

  useEffect(()=>{
    AllTables()
  },[])
return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Restaurant ID</th>
                    <th>ID</th>
                    <th>Number</th>
                    <th>Seats</th>
                    <th>Occupied</th>
                </tr>
            </thead>
            <tbody>
                {table.map(table=>{
                    return(
                        <tr>
                            <td>{table.restaurant_id}</td>
                            <td>{table.id}</td>
                            <td>{table.number}</td>
                            <td>{table.seats}</td>
                            <td>{table.occupied}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default DisplayTables