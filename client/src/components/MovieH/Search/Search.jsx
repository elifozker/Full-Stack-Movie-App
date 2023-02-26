import React from 'react'
import "./search.css"
const Search = ({ value, changeInput,onClick }) => {
  return (
    <div className='s-container'>
      <input onClick={onClick} type="text" placeholder='Search...' value={value} onChange={changeInput}></input>
      <span id='searchicon' className="material-symbols-outlined">
        search
      </span>

    </div>
  )
}

export default Search