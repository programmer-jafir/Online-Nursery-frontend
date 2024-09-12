import { FormEvent, useState} from 'react';
import { useEditProductMutation, useGetProductsQuery } from '../redux/api/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

const Update = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rating, setRating] = useState('');

  const [editProduct, { data, isLoading, isError, isSuccess }] = useEditProductMutation();
  const {  refetch  } = useGetProductsQuery();
  const navigate = useNavigate() 

  console.log({ data, isLoading, isError, isSuccess });

  const { id } = useParams();



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

    try {
     await editProduct({ _id: id, updatedProduct: productDetails }).unwrap();

      console.log('Edit Product added successfully');
  
      await refetch();
      
      navigate(-1)
      
    } catch (isError) {
      console.error('Failed to edit product:', isError);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-10">
      <div className="w-full max-w-md bg-green-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Product</h2>
        <form onSubmit={handleUpdate} className="space-y-4 items-center">
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="img">Product Image</Label>
            <Input
              onChange={e => setImage(e.target.value)}
              value={image}
              type="url"
              id="img"
              name="img"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="name">Product Name</Label>
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</Label>
            <textarea
              onChange={e => setDescription(e.target.value)}
              value={description}
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="price">Product Price</Label>
            <Input
              onChange={e => setPrice(e.target.value)}
              value={price}
              type="number"
              id="price"
              name="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="catagory">Product Category</Label>
            <Input
              onChange={e => setCategory(e.target.value)}
              value={category}
              type="text"
              id="catagory"
              name="catagory"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="quantity">Product Quantity</Label>
            <Input
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
              type="number"
              id="quantity"
              name="quantity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="rating">Review</Label>
            <Input
              onChange={e => setRating(e.target.value)}
              value={rating}
              type="number"
              id="rating"
              name="rating"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
