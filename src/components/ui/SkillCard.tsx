import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 ${className}`}>
      <div className="text-primary-medium mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3 text-primary-dark">{title}</h4>
      <p className="text-primary-blue">{description}</p>
    </div>
  );
};

export default SkillCard;