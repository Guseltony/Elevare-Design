
import React from 'react';

export const MembersCard = ({ image, name, position, description, social }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-black/80 w-80 h-96 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-28 h-28 object-cover object-top rounded-full mx-auto border-4 border-accent" 
        />
      </div>
      <h1 className="text-xl font-bold text-center text-white mb-1">{name}</h1>
      <p className="text-sm text-secondary font-medium text-center mb-3">{position}</p>
      <p className="text-accent text-sm text-center mb-4 line-clamp-3 leading-relaxed">{description}</p>
      <div className="flex justify-center gap-5 mt-auto pt-3 border-t border-gray-100 w-full">
              {social.map((Icon, index) => (
            <div key={index} className='bg-secondary rounded-full w-8 h-8 flex-center'>      
                <Icon  
                  className="text-xl text-white hover:text-accent cursor-pointer transition-colors duration-200" 
                />
            </div>
        ))}
      </div>
    </div>
  );
};