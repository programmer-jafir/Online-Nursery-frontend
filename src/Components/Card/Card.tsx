import React from 'react';
import Star from './Star';
import { Button } from '../ui/button';
import { Link } from "react-router-dom";

import { useAppDispatch } from '../../redux/hook'
import { addToCart } from '@/redux/features/cartSlice';

interface ProductCardProps {
  product:any;
}


const Card: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  
  const handleAddToCart =(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-green-50 m-4 shadow-xl">
      <img className="w-[400px] h-[300px] object-cover rounded-2xl" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        {/* <p className="text-gray-700 text-base">
          {product.description}
        </p> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* <span className="text-xl font-bold mr-2 mb-2">Price: ${price.toFixed(2)}</span> */}
        <span className="block  font-medium text-sm mr-2 mb-2">Price: {product.price}$</span>
        <span className="block font-medium text-sm mr-2 mb-2">Quantity: {product.quantity}</span>
        <span className="block font-medium text-sm mr-2 mb-2">
         <Star rating= {product.rating}/>
        </span>
        
        
        <Button onClick={()=>
          handleAddToCart(product)
        }  className='bg-green-500 hover:bg-lime-600 text-white text-base font-medium rounded p-2 my-2'>Add to Cart</Button>
        <Link className='bg-yellow-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5' to={`/product/${product._id}` }>Edit</Link>
      </div>
    </div>
  );
};

export default Card;
