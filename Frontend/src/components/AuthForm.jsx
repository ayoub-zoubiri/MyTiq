import React, { useState } from 'react';
import InputGroup from './InputGroup'; 

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const buttonText = mode === 'signIn' ? 'Access Account' : 'Sign Up';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting in ${mode} mode:`, { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <InputGroup
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        icon="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputGroup
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Le Bouton d'Action Principal : fond violet/bleu (indigo) et ombre */}
      <button 
        type="submit" 
        className="w-full py-3 rounded-lg text-lg font-semibold text-white 
                   bg-indigo-600 hover:bg-indigo-700 transition-colors 
                   shadow-lg shadow-indigo-500/50 mt-8" // Augmentation de la marge (mt-8)
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;