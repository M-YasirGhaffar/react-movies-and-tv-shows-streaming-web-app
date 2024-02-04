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
    <div className="z-[5] px-10 mx-auto border-b sticky top-0 left-0 bg-gray-200/90 dark:bg-[#222222E6] dark:text-white text-gray-900">
      <nav className="px-10 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to='/'><span className="self-center text-lg select-none font-semibold whitespace-nowrap">Movies & Tv Shows</span>
          </Link>

          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
              rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-full p-2 px-6"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              onKeyPress={handleKeyPress}
            />
            <i onClick={handleClick} className="inline absolute right-[.5rem] z-[99] text-xl p-1 text-gray-700 align-center text-center my-auto fa-solid fa-magnifying-glass"></i>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
