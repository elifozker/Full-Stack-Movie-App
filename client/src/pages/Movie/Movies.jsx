import React from 'react'
import "./movies.css"
import Filter from "../../components/MovieH/Filter/Filter"
import List from "../../components/MovieH/List/List"
import Search from "../../components/MovieH/Search/Search"
import { useState, useEffect } from 'react'
import Footer from "../../components/Footer";

const Movies = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieAll, setMovieAll] = useState([]);
  const [inputSearch, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [click, setClick] = useState(false);
  const count = 0;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8800/genreMovies")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setMovies(json);
        setFilteredData(json);
        setMovieAll(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  console.log(click);
  function onClick  () {
    setClick(true);
   
  }



  const applyFilters = () => {
    let updateProductList = movies;  
      if (selectedCategory) {
        updateProductList = movies.filter((item) => item.genreTitle === selectedCategory);
        console.log(updateProductList);
        setFilteredData(updateProductList);
        
      }
      if (selectedCategory === "all") {
        setFilteredData(movies);
      }   
  }
  useEffect(() => {
    applyFilters();
  }, [selectedCategory]);

  const applySearch = () =>{
    let updateProductList = movies;  
    if (inputSearch) {
      updateProductList = movies.filter((item) => item.movieTitle.toLowerCase().includes(inputSearch.toLowerCase()));
      setFilteredData(updateProductList);
      
    }
 
    if (inputSearch === '') {
      setFilteredData(movies);
      
    }
  }
  useEffect(() => {
    applySearch();
  }, [inputSearch]);
   
      return (

        <div className="h-container">
          <h1 className='browse'>Browse by</h1>
          <Search onClick={onClick} className="search" value={inputSearch} changeInput={(e) => setSearchInput(e.target.value)} />
          <div className="h-row">
            <div className="h-col">
              <Filter selectedCategory={selectedCategory} selectToggle={handleSelectCategory} />
            </div>
            <div className="h-col">
              <List list={filteredData} />
            </div>
          </div>
          <div className="container-footer">
            
          </div>
    
    
        </div>
    
    
      )
}

export default Movies