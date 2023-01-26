import React, { useState } from "react";
import axios from "axios";
import Cards from "../../components/card/Cards";

const API_KEY = "dab09afe07807629bbe106171abe5bd0";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(API_URL + searchQuery);
    setSearchResults(response.data.results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((result) => (
        <Cards key={result.id} movie={result} />
      ))}
    </div>
  );
};

export default Search;
