import React, { useState } from 'react';
import SearchBar from './searchbar';
import axios from 'axios';

function EmployeeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?q=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API request
    }
  };

  return (
    <div>
      <h1>Employee Search</h1>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((employee) => (
            <li key={employee._id}>{employee.name}</li>
            // You can display other employee information as needed
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmployeeSearch;
