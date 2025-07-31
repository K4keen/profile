import React from 'react';

interface TechTagProps {
  text: string;
  variant?: 'default' | 'large';
  className?: string;
}

const TechTag: React.FC<TechTagProps> = ({ 
  text, 
  variant = 'default',
  className = '' 
}) => {
  const baseClasses = 'bg-primary-medium/20 text-primary-blue rounded-full font-medium';
  const sizeClasses = variant === 'large' 
    ? 'px-4 py-2 text-sm' 
    : 'px-3 py-1 text-sm';
  
  return (
    <span className={`${baseClasses} ${sizeClasses} ${className}`}>
      {text}
    </span>
  );
};

export default TechTag;