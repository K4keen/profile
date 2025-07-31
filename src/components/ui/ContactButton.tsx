import React from 'react';

interface ContactButtonProps {
  icon: React.ReactNode;
  link: string;
  hoverColor: string;
  ariaLabel?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  icon,
  link,
  hoverColor,
  ariaLabel
}) => {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className={`group bg-primary-light p-8 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl flex items-center justify-center border border-primary-medium/20 ${hoverColor}`}
    >
      <div className="text-primary-blue group-hover:scale-125 transition-all duration-300">
        {icon}
      </div>
    </a>
  );
};

export default ContactButton;