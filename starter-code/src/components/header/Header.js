import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            alt="movieImage"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Movietime.svg/1200px-Movietime.svg.png"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>

        <Link to="/search" style={{ textDecoration: "none" }}>
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
