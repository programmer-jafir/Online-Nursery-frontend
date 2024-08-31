import { CreditCard, Trash2 } from "lucide-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Button } from "../ui/button";
import { clearCart } from "../../redux/features/cartSlice";

const OrderSum = () => {
  const dispatch = useAppDispatch()
    const {totalPrice,selectedItems}= useAppSelector((store)=>store.cart)
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
  return (
    <div className=" lg:w-80 w-full h-full bg-green-300 shadow-lg rounded-xl bg-opacity-35 mb-10">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-dark">Order Summary</h1>
        <p className="text-sm text-dark mt-2">
          Selected Items : {selectedItems}
        </p>
        <p className="text-sm text-dark mt-2">
          {/* Total Price : ${totalPrice.toFixed(2)} */}
        </p>
        <p className="text-sm text-dark mt-2">
          {/* Tax ({taxRate * 100}): ${tax.toFixed(3)} */}
        </p>
        <h3 className="text-xl font-semibold text-dark mt-4">
          Grand Total ${totalPrice.toFixed(3)}
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="bg-red-500 hover:bg-red-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-green-500 hover:bg-green-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center"
        >
          <span>Proceed Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </Button>
      </div>
    </div>
  );
};

export default OrderSum;
