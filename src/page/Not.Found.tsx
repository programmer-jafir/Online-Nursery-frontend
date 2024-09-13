import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-2xl text-red-500 mt-4">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <button className="flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            <FaHome className="mr-2" /> Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
