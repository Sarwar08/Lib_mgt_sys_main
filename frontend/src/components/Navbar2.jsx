import { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center font-bold">
                <div>
                    <Link to="/" className="text-white text-2xl font-bold">
                        PUB CSE LIBRARY
                    </Link>
                </div>
                <div className="lg:hidden flex-0">
                    <button
                        className="text-white text-xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        &#9776;
                    </button>
                </div>
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } lg:flex lg:items-center lg:w-auto`}
                >
                    <ul className="lg:flex">
                        <li className="mr-4">
                            <Link to="/" className="text-white hover:text-sky-400 focus:text-sky-500">
                                Home
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link
                                to="/books/create"
                                className="text-white hover:text-sky-400 focus:text-sky-500"
                            >
                                Add Book
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/gallery" className="text-white hover:text-sky-400 focus:text-sky-500">
                                Gallery 
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/aboutUs" className="text-white hover:text-sky-400 focus:text-sky-500">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
