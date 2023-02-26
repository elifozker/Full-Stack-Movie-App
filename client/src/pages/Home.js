import React from "react";
import "../styles/Home.css";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import PopularList  from "../components/Partials/PopularList";


export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">       
      <Carousel/>
      <Cards className="Cards"/>   
      <PopularList/>   
      
      </div>
    </div>
  );
};