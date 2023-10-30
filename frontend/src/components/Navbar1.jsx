import {useState} from "react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
   return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-blue-500 text-2xl font-bold">
            PUB CSE LIB
          </a>
        </div>
        <div className="lg:hidden">
            <button 
              className="text-blue-500 text-xl focus:outline-none"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
        </div>
        <div 
        className={`${
          isOpen?"block":"hidden"
        } lg:flex lg:items-center lg:w-auto`}>
          <ul className="lg:flex">
            <li className="mr-4">
              <a href="#" className="text-blue-500 hover:text-green-600 font-bold">
                  Home
                </a>
              </li>
                <li className="mr-4">
                  <a href="#" className="text-blue-500 hover:text-green-600 font-bold">
                    Show Books
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-blue-500 hover:text-green-600 font-bold">
                    Add Book
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-blue-500 hover:text-green-600 font-bold">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
      
    </nav>
  )
}

export default Navbar1