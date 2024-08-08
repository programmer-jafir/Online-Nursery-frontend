import { useState } from "react";
import logo from'./logo-1.png';



const Navbar: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
        <nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-7">

          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="w-20 mr-2" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</a>
            <a href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="#products" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Products</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Post Product</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
          </div>
        </div>

        <div className="hidden md:flex items-center">
            <input
              type="text"
              className="form-input px-4 py-2 rounded-full border border-gray-300"
              placeholder="Search..."
            />
          </div>

        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
      <ul>
        <li><a href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
        <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
        <li><a href="#products" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Products</a></li>            
        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Post Product</a></li>            
        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
        <li>
            <input
              type="text"
              className="form-input px-4 py-2 mt-2 w-full rounded-full border border-gray-300"
              placeholder="Search..."
            />
          </li>

      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;
