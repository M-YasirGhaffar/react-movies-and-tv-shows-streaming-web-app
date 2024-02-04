import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='scale-75 sm:scale-100'>
      <input type="checkbox" className="hidden checkbox" id="checkbox" onChange={handleThemeToggle} checked={isDarkMode} />
      <label htmlFor="checkbox" className="checkbox-label">
        <div className={`border-2 border-yellow-600 inline-block z-10 px-2 py-1 rounded-full ${isDarkMode ? 'dark:bg-[#222222]' : 'bg-white'}`}>
          <i className={`fas fa-moon z-20 mr-2 text-gray-400 ${isDarkMode ? 'dark:text-yellow-400' : 'text-yellow-400'}`}></i>
          <i className={`fas fa-sun z-20 text-yellow-400 ${isDarkMode ? 'dark:text-gray-400' : 'text-yellow-400'}`}></i>
        </div>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
