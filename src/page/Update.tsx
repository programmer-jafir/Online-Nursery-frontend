
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEditProductMutation } from '../redux/api/api';
import { useParams } from 'react-router-dom';

const Update = () => {
  
  const [image, setImage]= useState('');
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [price, setPrice]= useState('');
  const [category, setCategory]= useState('');
  const [quantity, setQuantity]= useState('');
  const [rating, setRating]= useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [editProduct, {data, isLoading, isError, isSuccess}] = useEditProductMutation();
  console.log({data,isLoading, isError,isSuccess})


  const{id}=useParams();
  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const productDetails: any = {};
  if (image) productDetails.image = image;
  if (name) productDetails.name = name;
  if (description) productDetails.description = description;
  if (price) productDetails.price = price;
  if (category) productDetails.category = category;
  if (quantity) productDetails.quantity = quantity;
  if (rating) productDetails.rating = rating;
    // const productDetails ={
    //   image,
    //   name,
    //   description,
    //    price,
    //     category,
    //      quantity,
    //      rating
    //     };
        // const {id} = data;
        // dispatch(editProduct({ _id: id, updatedProduct: productDetails }));
        dispatch(editProduct({  _id: id, updatedProduct: productDetails }));

  };

    return (
        <div className='my-10 ml-96'>
            <div className="w-full max-w-md bg-green-100 rounded-lg shadow-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-4 text-center">Edit Product</h2>
          <form onSubmit={handleUpdate} className="space-y-4 items-center ">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="img">Product Image</label>
              <input 
              onChange={e=>setImage(e.target.value)}
              // value={pimage}
              value={image}
              type="url" id="img" name="img" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Product Name</label>
              <input
              onChange={e=>setName(e.target.value)}
              value={name}
              type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</label>
              <textarea
              onChange={e=>setDescription(e.target.value)}
              value={description}
              id="description" name="description" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="price">Product Price</label>
              <input
              onChange={e=>setPrice(e.target.value)}
              value={price}
               type="number" id="price" name="price" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="catagory">Product Catagory</label>
              <input
              onChange={e=>setCategory(e.target.value)}
              value={category}
              type="text" id="catagory" name="catagory" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">Product Quantity</label>
              <input
              onChange={e=>setQuantity(e.target.value)}
              value={quantity}
               type="number" id="quantity" name="quantity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="rating">Review</label>
              <input
              onChange={e=>setRating(e.target.value)}
              value={rating}
               type="number" id="rating" name="rating" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            
            <div>
              <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Save Changes
              </button>
              
            </div>
          </form>
        </div>
        </div>
    );
};

export default Update;



