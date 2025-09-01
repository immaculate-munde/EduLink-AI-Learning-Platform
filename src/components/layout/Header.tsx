import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { LogOutIcon, SunIcon, MoonIcon } from 'lucide-react';
export function Header() {
  const {
    user,
    logout
  } = useAuth();
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                EduLink AI
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
              {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gray-600" /> : <SunIcon className="h-5 w-5 text-yellow-400" />}
            </button>
            {user && <>
                <span className="hidden md:block text-sm font-medium">
                  {user.name} ({user.role})
                </span>
                <button onClick={logout} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label="Logout">
                  <LogOutIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </>}
          </div>
        </div>
      </div>
    </header>;
}