import React, { useState } from 'react'
import '../styles/Search.css';

function Search({searchValue, setSearchValue}) {
   
  return (
    <input type="text" placeholder='Search Employee' value={searchValue}  onChange={(e)=>setSearchValue(e.target.value)}/>
  )
}

export default Search