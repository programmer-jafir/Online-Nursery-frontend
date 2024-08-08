import React from 'react';
import Star from './Star';
import { Button } from '../ui/button';
import EditCardModal from './EditCardModal';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
}

const Card: React.FC<ProductCardProps> = ({ image, title, description, price, quantity, rating, category }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-green-50 m-4 shadow-xl">
      <img className="w-[400px] h-[300px] object-cover rounded-2xl" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-xl font-bold mr-2 mb-2">Price: ${price.toFixed(2)}</span>
        <span className="block  font-medium text-sm mr-2 mb-2">Category: {category}</span>
        <span className="block font-medium text-sm mr-2 mb-2">Quantity: {quantity}</span>
        <span className="block font-medium text-sm mr-2 mb-2">
         <Star rating= {rating}/>
        </span>
        <Button className='bg-green-500 hover:bg-lime-600 text-white text-base font-medium rounded p-2 my-2'>Add to Cart</Button>
        {/* <Button className='bg-yellow-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5'>Edit</Button> */}
        <EditCardModal />
      </div>
    </div>
  );
};

export default Card;
