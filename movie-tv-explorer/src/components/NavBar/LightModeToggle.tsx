import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '../../assets/icons';

const LightModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    if (localStorage.theme === 'dark') return true;
    if (localStorage.theme === 'light') return false;
    return false; // Default to light mode if no preference is set
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="block text-gray-700 dark:text-gray-200 p-2 border border-gray-400 dark:border-gray-600 rounded-lg"
    >
      <div className="w-6 h-6">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
};

export default LightModeToggle;