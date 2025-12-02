import React, { useState } from 'react';
import InputGroup from './InputGroup'; 
import { useAuth } from '../context/AuthContext';

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For registration
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // For registration
  const { login, register } = useAuth();
  const [error, setError] = useState('');

  const buttonText = mode === 'signIn' ? 'Access Account' : 'Sign Up';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    let result;
    if (mode === 'signIn') {
        result = await login(email, password);
    } else {
        result = await register(name, email, password, passwordConfirmation);
    }

    if (!result.success) {
        setError(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
      
      {mode === 'signUp' && (
          <InputGroup
            label="Full Name"
            type="text"
            placeholder="John Doe"
            icon="user" // Assuming you have a user icon or similar
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      )}

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

      {mode === 'signUp' && (
          <InputGroup
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            icon="lock"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
      )}

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