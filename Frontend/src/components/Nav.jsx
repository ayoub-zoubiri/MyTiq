import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function Nav() {
  const { user, logout,login } = useAuth();
 
  return (
    <>
     <nav className="bg-black text-white px-8 py-4 flex items-center justify-between">
    
      <div className="flex items-center gap-2 font-bold text-xl">
        {/* <span className="material-icons">battery_std</span> */}

        <span className="text-white text-2xl">🎟️</span> 
        MyTiq
      </div>

  
     
<ul className="flex gap-6">

<li className="hover:text-gray-400 cursor-pointer">
     <Link to="/Home">Home</Link>
  </li>
 
   <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/ticket"> My Tickets</Link>

  </li>
  
  
</ul>

     
      <div className="hidden md:flex items-center gap-4">
        <button className="hover:text-gray-400"  onClick={login}>Sign In</button>
        {/* <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
         
        </button> */}

        <button 
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-400 hover:text-white transition-colors"
        >
            <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  
    </>
  )
}

export default Nav
