import React from 'react';
import { Badge as BadgeType } from '../types';

interface BadgeProps {
  badge: BadgeType;
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({ badge, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden relative mb-2 ${badge.earned ? 'opacity-100' : 'opacity-40 grayscale'}`}>
        <img 
          src={badge.image} 
          alt={badge.name} 
          className="w-full h-full object-cover"
        />
        {!badge.earned && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-40">
            <span className="text-white font-bold">Locked</span>
          </div>
        )}
      </div>
      <h3 className="font-heading text-sm font-bold text-center">{badge.name}</h3>
      <p className="text-xs text-neutral-600 text-center">{badge.description}</p>
    </div>
  );
};

export default Badge;