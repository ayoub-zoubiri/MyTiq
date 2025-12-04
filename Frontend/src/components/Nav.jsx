import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
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
