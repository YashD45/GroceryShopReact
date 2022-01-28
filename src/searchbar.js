import React from 'react';
import './Searchbar.css';
 import SearchIcon from '@mui/icons-material/Search';
//import search from 'react-router-dom'

function Searchbar({placeholder,data}) {
  return (
  <div className='search' id='Test'>

<div className='searchInputs'>
    <input type="text" placeholder='Search here...'   /><SearchIcon />
    <div className='searchIcon'>
    </div> 
</div>
<div className='dataResult'>
 
</div>
  </div>
  );
}

export default Searchbar;
