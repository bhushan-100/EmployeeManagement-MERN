// SearchBar.js
import React from 'react';

function SearchBar({ value, onChange, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
