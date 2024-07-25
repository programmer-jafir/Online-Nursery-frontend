import React, { useState } from 'react';

interface NavbarItemProps {
  title: string;
  children?: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {title}
      </button>
      {children && isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
