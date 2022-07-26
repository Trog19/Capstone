import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();
       
        props.songSearch(search)
        console.log(search)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={search} onChange={(event)=> setSearch(event.target.value)}/>
                <button type='submit'>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;