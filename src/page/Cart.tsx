/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from "../redux/hook";
import CartDetails from "../Components/Cart/CartDetails";
import OrderSum from "../Components/Cart/OrderSum";

const Cart = () => {
  // const products = getAllProducts();

  const products = useAppSelector((store) => store.cart.carts);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
         <div className="space-y-5 lg:mt-0 mt-5"> 
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product._id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500"> not product found</p>
          )}
        </div> 
        <OrderSum />
      </div>
    </div>
  );
};

export default Cart;