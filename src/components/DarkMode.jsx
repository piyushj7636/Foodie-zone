import React, { useEffect, useState } from 'react';

const DarkMode = () => {

	const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

	return (
		<div>
			<button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full transition-all duration-300'
          >
            {isDarkMode ? '🌙' : '☀'}
          </button>
		</div>
	);
};

export default DarkMode;