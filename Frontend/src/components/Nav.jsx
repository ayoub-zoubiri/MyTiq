import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
     <nav className="bg-black text-white px-8 py-4 flex items-center justify-between">
    
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="material-icons">battery_std</span> {/* icône batterie */}
        MyTiq
      </div>

  
      
<ul className="flex gap-6">
  <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/events">Events</Link>
  </li>
 
  <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/about">About</Link>
  </li>
  <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/contact">Contact</Link>
  </li>

   <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/ticket">Tickete</Link>

  </li>
  
  <li className="hover:text-gray-400 cursor-pointer">
    <Link to="/ticket">Tickete</Link>
  </li>
</ul>

     
      <div className="hidden md:flex items-center gap-4">
        <button className="hover:text-gray-400">Sign In</button>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </nav>
  
    </>
  )
}

export default Nav
