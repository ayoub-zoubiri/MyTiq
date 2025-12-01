import React, { useState } from 'react';
import ToggleButton from '../components/ToggleButton';
import AuthForm from '../components/AuthForm';

// Les styles Tailwind sont directement intégrés ici
const AuthPage = () => {
  const [mode, setMode] = useState('signIn'); 
  
  const title = mode === 'signIn' ? 'Welcome Back' : 'Create Account';
  const subtitle = 'Enter your credentials to continue'; 

  return (
    // Conteneur de la page : fond noir, centrage (flex)
    <div className=" min-h-screen bg-black text-white flex items-center justify-center p-4">
      
      {/* Carte du formulaire : fond gris foncé, coins arrondis, ombre */}
      <div className="w-full max-w-md bg-gray-900 p-10 rounded-xl shadow-2xl border border-white border-opacity-10">
        
        {/* Logo MyTiq */}
        <div className="text-2xl font-bold text-white mb-6 text-center">
          MyTiq
        </div>

        {/* Titres */}
        <h2 className="text-2xl font-normal mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mb-8 text-center">
          {subtitle}
        </p>

        {/* Composants Enfants */}
        <ToggleButton currentMode={mode} onToggle={setMode} />
        <AuthForm mode={mode} />
        
        {/* Lien Forgot Password (placé ici pour le style de la capture) */}
        <a href="#" className="text-sm text-blue-400 hover:underline block text-right mt-2">
            Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default AuthPage;