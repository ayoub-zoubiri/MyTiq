import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { name: 'Home Page', path: '/', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { name: 'Events', path: '/admin/events', icon: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z' },
  ];

  const userName = user ? user.name : 'Admin';
  const userRole = user ? (user.role || 'Admin') : 'Admin'; // Assuming user object has role
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`;

  return (
    <div className="w-64 bg-[#1A202C] text-white min-h-screen flex flex-col border-r border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">MyTiq</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#2D3748] text-blue-400'
                    : 'text-gray-400 hover:bg-[#2D3748] hover:text-white'
                }`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d={item.icon} />
                </svg>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button 
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-400 hover:text-white transition-colors"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span>Logout</span>
        </button>
      </div>
       <div className="p-4 border-t border-gray-700 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
              <img src={avatarUrl} alt="Admin" />
          </div>
          <div>
              <p className="text-sm font-semibold">{userName}</p>
              <p className="text-xs text-gray-400">{userRole}</p>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
