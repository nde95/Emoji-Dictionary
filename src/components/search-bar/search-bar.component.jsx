import React, { useState } from 'react';
import "./search-bar.styles.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="search-container">
      <div className="emoji-search">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default SearchBar;
