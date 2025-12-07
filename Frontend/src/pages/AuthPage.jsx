import React, { useState } from 'react';
import ToggleButton from '../components/ToggleButton';
import AuthForm from '../components/AuthForm';
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [mode, setMode] = useState('signIn'); 
  
  const title = mode === 'signIn' ? 'Welcome Back' : 'Create Account';
  const subtitle = 'Enter your credentials to continue'; 

  return (
    
    <div className=" min-h-screen bg-black text-white flex items-center justify-center p-4">
      
     
      <div className="w-full max-w-md bg-gray-900 p-10 rounded-xl shadow-2xl border border-white border-opacity-10">
        
      
        <div className="text-2xl font-bold text-white mb-6 text-center">
          MyTiq
        </div>

       
        <h2 className="text-2xl font-normal mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mb-8 text-center">
          {subtitle}
        </p>

       
        <ToggleButton currentMode={mode} onToggle={setMode} />
        <AuthForm mode={mode} />
        
          <h2 className='mt-[180px]'></h2>

  <Link to="/">
  <button className="px-5 py-2 rounded-md bg-white/20 text-white font-medium backdrop-blur-md border border-white/40 hover:bg-white/30 transition">
  Home page
  </button>
</Link>
      </div>
    </div>
  );
};

export default AuthPage;