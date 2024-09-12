import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const OrderSuccessPage = () => {
  const {totalPrice,selectedItems}= useAppSelector((store)=>store.cart)
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    location.reload();
  };

  const handleViewProducts = () => {
    navigate("/products");
    location.reload();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      location.reload();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50 pt-10 pb-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <FaCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been successfully placed and is being processed.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Summary</h2>
          <p className="text-gray-600">Total Items: <strong>{selectedItems}</strong></p>
          <p className="text-gray-600">Total amount: <strong>{Math.floor(totalPrice)}$</strong></p>
        </div>

        <button
          onClick={handleBackToHome}
          className="w-full py-2 mb-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Back to Home
        </button>

        <button
          onClick={handleViewProducts}
          className="w-full py-2 bg-gray-200 text-green-600 font-semibold rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          View More Products
        </button>
      </div>

      <div className="text-center mt-6 text-gray-500">
        <p>Need help? Contact our <a href="/support" className="text-green-600 hover:underline">support team</a>.</p>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
