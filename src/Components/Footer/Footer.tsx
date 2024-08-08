import {  FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold">Support</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold">Legal</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Law Enforcement
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full sm:w-1/2 md:w-1/5">
            <h2 className="text-lg font-semibold">Subscribe</h2>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-800 rounded"
              />
              <Button
                type="submit"
                className="mt-2 w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-400"
              >
                Subscribe
              </Button>
            </form>
          </div>
          {/* Column 5 */}
          <div className="w-full sm:w-1/2 md:w-1/5">
          <div className="ml-20">
          <h3 className="text-green-500 mb-3 mt-6">Comming Soon...</h3>
            <div className="flex ">
            <span className="mr-1 text-green-500 text-2xl"><a href=""><FaFacebookSquare /></a></span>
            <span className="mr-1 text-green-500 text-2xl"><a href=""><FaTwitterSquare /></a></span>
            <span className="mr-1 text-green-500 text-2xl"><a href=""><FaLinkedin /></a></span>
            <span className="mr-1 text-green-500 text-2xl"><a href=""><FaSquareInstagram /></a></span>
            </div>
          </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 <span className="text-green-500">Plant Life Nursery</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
