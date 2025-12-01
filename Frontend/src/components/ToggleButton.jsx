import React from 'react';

const ToggleButton = ({ currentMode, onToggle }) => {
  // Classes pour le style actif (fond sombre) et inactif (texte gris)
  const activeClass = "bg-black text-white shadow-md";
  const inactiveClass = "text-gray-400 hover:text-white";

  return (
    // Conteneur : flex, espace entre les boutons, fond gris foncé pour l'encadrement
    <div className="flex bg-gray-900 rounded-lg mb-8 p-1">
      
      {/* Bouton Sign In */}
      <button 
        onClick={() => onToggle('signIn')}
        className={`flex-1 py-2 text-center text-sm rounded-lg transition-colors duration-200 ${currentMode === 'signIn' ? activeClass : inactiveClass}`}
      >
        Sign In
      </button>

      {/* Bouton Sign Up */}
      <button
        onClick={() => onToggle('signUp')}
        className={`flex-1 py-2 text-center text-sm rounded-lg transition-colors duration-200 ${currentMode === 'signUp' ? activeClass : inactiveClass}`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default ToggleButton;