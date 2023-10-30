import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown menu state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold">
            PUB CSE LIBRARY
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                Home
              </a>
            </li>
            <li
              className={`mr-4 relative group ${
                isDropdownOpen ? 'text-green-400' : 'text-white'
              }`}
              onClick={toggleDropdown}
            >
              <a href="#" className="hover:text-green-400">
                Services
              </a>
              <div
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } absolute top-8 right-0 bg-gray-900 text-white mt-2 p-2 w-36`}
              >
                <a href="#" className="block hover:text-green-400">
                  Service 1
                </a>
                <a href="#" className="block hover:text-green-400">
                  Service 2
                </a>
                <a href="#" className="block hover:text-green-400">
                  Service 3
                </a>
              </div>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                About
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
