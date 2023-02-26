import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import {Navigate} from "react-router-dom";


function NavBar() {

 

  const logout = () => {
    Navigate ("/login")
    
}
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">

        <NavLink exact to="/">
          <div className="logo">
            MOVIEBOX
            
          </div> 
        </NavLink>
        

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/movies"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/watchlist"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Watchlist
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/favourites"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Favorites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={logout}
            >
              LogOut
            </NavLink>
          </li>
        </ul>
      </nav>
    
    </>
  );
}

export default NavBar;