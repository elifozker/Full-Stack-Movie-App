import React from 'react'
import MainCategory from '../../Partials/MainCategory/MainCategory'
import { useState,useEffect } from 'react'

const Filter = ({selectedCategory,selectToggle,FilteronClick}) => {
  const [genres,setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8800/genres")
      .then((response) => { 
        return response.json() 
      })
      .then((json) => { 
        setGenres(json);      
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="f-container">
      <div className="filter-group">       
        <MainCategory onClick={FilteronClick} options={genres} value={selectedCategory} selectToggle={selectToggle} />
        
      </div>
     
    </div>
   
  )
}

export default Filter