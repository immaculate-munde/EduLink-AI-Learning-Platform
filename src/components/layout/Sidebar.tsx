import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { HomeIcon, BookIcon, LibraryIcon, UsersIcon, MenuIcon, XIcon } from 'lucide-react';
export function Sidebar() {
  const {
    user
  } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navItems = [{
    to: user?.role === 'teacher' ? '/app/teacher' : '/app/student',
    icon: <HomeIcon className="h-5 w-5" />,
    label: 'Dashboard'
  }, {
    to: '/app/quiz',
    icon: <BookIcon className="h-5 w-5" />,
    label: 'Quizzes',
    role: 'student'
  }, {
    to: '/app/resources',
    icon: <LibraryIcon className="h-5 w-5" />,
    label: 'Resources'
  }, {
    to: '/app/forum',
    icon: <UsersIcon className="h-5 w-5" />,
    label: 'Community'
  }];
  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => !item.role || item.role === user?.role);
  return <>
      {/* Mobile toggle button */}
      <button onClick={toggleSidebar} className="fixed z-20 bottom-4 right-4 md:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg" aria-label="Toggle sidebar">
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-10 transform md:relative md:translate-x-0 transition duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        md:block
      `}>
        <div className="p-4 space-y-6">
          <div className="pt-8 md:pt-0">
            {filteredNavItems.map(item => <NavLink key={item.to} to={item.to} className={({
            isActive
          }) => `
                  flex items-center p-3 mb-2 rounded-lg transition-colors
                  ${isActive ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'}
                `} onClick={() => setIsOpen(false)}>
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>)}
          </div>
        </div>
      </div>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden" onClick={() => setIsOpen(false)} />}
    </>;
}