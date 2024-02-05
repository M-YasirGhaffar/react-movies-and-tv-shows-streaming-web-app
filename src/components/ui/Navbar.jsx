import React from 'react';
import ThemeToggle from './ToggleTheme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClick = () => {
    navigate(`/search/${encodeURIComponent(query.trim())}`);
  }

  return (
    <div className="z-[20] px-5 sm:px-8 mx-auto border-b top-0 left-0 bg-gray-200/60 dark:bg-[#6d6d6d88] w-full dark:text-white text-gray-900">
      <nav className="px-3 sm:px-8 py-3">
        <div className="container mx-auto flex sm:flex-row flex-col flex-wrap items-center justify-between">
          <Link to='/'><span className="mt-1 sm:mt-0 inline-block self-center text-lg select-none font-semibold whitespace-nowrap">Movies & Tv Shows</span>
          </Link>
          <div className="relative ">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
              rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-full p-1 
              sm:p-2 px-3 sm:px-6 mt-1 sm:mt-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              onKeyPress={handleKeyPress}
            />
            <i onClick={handleClick} className="inline hover:text-gray-600 active:scale-[90%] absolute right-[.5rem] 
            z-[30] text-xl sm:p-1 py-[0.35rem] text-gray-700 align-center text-center my-auto fa-solid 
            fa-magnifying-glass"></i>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
