import React, { useState } from "react";
import "../styles/searchbar.css";

const SearchBar = ({ tasks,oldTasks, filteredData }) => {
  const [query, setQuery] = useState(""); // Initialize with an empty string

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    
    const filteredItems = tasks.filter((task) =>
      task.task.toLowerCase().includes(input.toLowerCase())
    );
    if(input===""){
        filteredData(oldTasks);
    }else{
    filteredData(filteredItems);
    } // Update the filtered tasks
  };

  return (
    <section className="searchBar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="search tasks"
        className="search-input"
      />
    </section>
  );
};

export default SearchBar;
