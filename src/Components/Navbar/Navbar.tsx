import { ChangeEvent, useEffect, useState } from "react";
import logo from'../../assets/logo-1.png';
import PostCardModal from "../Card/PostCardModal";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setSearchTerm } from "@/redux/features/searchSlice";


const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact Us" },
    { path: "/product", name: "Products" },
  ];

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTermLocal] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      dispatch(setSearchTerm(searchTerm)); 
    }, 300); 

    return () => {
      clearTimeout(debounceTimeout); // When searchTerm changes
    };
  }, [searchTerm, dispatch]);

  const products = useAppSelector((store) => store.cart.products);
  const selectedItems = useAppSelector((state) => state.cart.selectedItems);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTermLocal(e.target.value);
  };
  return (
    <div>
        <nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-7">

          <div>
            <Link  to="/" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="w-20 mr-2" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>(
              <div key={link.path}>
              <Link
                to={link.path}
                className={`${
                  activeLink === link.path ? "py-4 px-2 hover:text-green-500 border-b-4 border-green-500 font-semibold" : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
            </div>
            ))}
            <PostCardModal/>
          </div>
        </div>

        <div className="hidden md:flex items-center">
            <input
              type="text"
              className="form-input px-4 py-2 rounded-full border border-gray-300"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <div className="relative">
            <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
                to={"/cart"}
              >
                <ShoppingCart className="items-end ml-10"  size={24} />
              </Link>
              <span className="rounded-full absolute top-[-10px] left-[60px]  text-black text-center size-[25px]">
              {selectedItems}
              </span>
            </div>
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
      {navLinks.map((link) =>(
              <div key={link.path}>
              <Link
                to={link.path}
                className={`${
                  activeLink === link.path ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
            </div>
            ))}
        <li className="my-4"><PostCardModal/></li>            
        <li className="relative"><Link to="/cart" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><ShoppingCart/></Link><span className="rounded-full absolute top-[-10px] left-[25px]  text-black text-center size-[25px]">
        {selectedItems}
              </span></li>
        <li>
            <input
              type="text"
              className="form-input px-4 py-2 mt-2 w-full rounded-full border border-gray-300"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
          </li>

      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;
