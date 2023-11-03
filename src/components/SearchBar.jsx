/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
const SearchBar = (props) => {
    const [search, setSearch] = useState("")
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.giveData(search);
        setSearch("")
      }}>
        <input
          className="Search-Bar"
          name="search"
          type="text"
          placeholder="Search for the owner"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
