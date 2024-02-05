import React, { useState } from 'react';
// import SearchIcon from '@heroicons/react/outline/SearchIcon';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle search functionality here (e.g., call an API, filter local data)
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // ... your search logic here
    };

    return (
        <div className="relative flex items-center w-2/3">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Product..."
                className="bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-opacity-50 w-full"
            />
            <IoSearch className="absolute right-3 top-3 text-gray-400 h-5 w-5 cursor-pointer hover:text-blue-500" />
        </div>
    );
};

export default SearchBar;
