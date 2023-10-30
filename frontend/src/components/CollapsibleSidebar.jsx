// CollapsibleSidebar.js
import { useState } from 'react';

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } lg:block lg:static lg:w-1/5 bg-gray-800 text-white p-4`}
    >
      <button
        className="lg:hidden text-white text-xl focus:outline-none"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      {/* Sidebar content goes here */}
    </div>
  );
};

export default CollapsibleSidebar;
