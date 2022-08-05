import React, { useState } from 'react';
import "./SearchBar.css"

const SearchBar = (props) => {
    const [search, setSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();
       
        props.RestaurantSearch(search)
        console.log(search)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='Bar'>
                <input type='text' value={search} onChange={(event)=> setSearch(event.target.value)}/>
                <button type='submit'>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;