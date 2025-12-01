import React from 'react';
// Importez vos icônes (ici, j'utilise lucide-react comme exemple)
import { Mail, Lock } from 'lucide-react'; 

const InputGroup = ({ icon, type, placeholder, value, onChange, label }) => {
  const IconComponent = icon === 'email' ? Mail : Lock; 
  
  return (
    <div className="mb-6">
        {/* Label (Email Address / Password) */}
        <label className="text-sm font-medium text-gray-300 mb-2 block">
            {label}
        </label>
        
        {/* Conteneur de l'Input : fond sombre, bordure, centrage de l'icône */}
        <div className="flex items-center bg-gray-800 rounded-lg py-3 px-4 ">
            {/* Icône */}
            <IconComponent className="text-gray-500 mr-3 h-5 w-5" />
            
            {/* Champ de Saisie : w-full, fond transparent */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-500"
            />
        </div>
    </div>
  );
};

export default InputGroup;