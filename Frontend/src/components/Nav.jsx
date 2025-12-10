
import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="text-white text-2xl">🎟️</span>
        MyTiq
      </div>

      <ul className="flex gap-6">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/About">About</Link>
        </li>

        {user && (
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/ticket">My Tickets</Link>
          </li>
        )}

        {user && user.role === 'admin' && (
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/admin/events" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
             
              Dashboard
            </Link>
          </li>
        )}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        {!user && (
          <Link to="/auth" className="hover:text-gray-400">
            Sign In
          </Link>
        )}

        {user && (
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
              </path>
            </svg>
            <span>Logout</span>
          </button>
        )}
      </div>

    </nav>
  );
}

export default Nav;
