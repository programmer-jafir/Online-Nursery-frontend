import Star from "@/Components/Card/Star";
import { Button } from "@/Components/ui/button";
import { useDeleteaProductMutation, useGetaProductQuery, useGetProductsQuery } from "@/redux/api/api";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CardDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetaProductQuery(id);
  const [deleteProduct] = useDeleteaProductMutation();
  const { refetch } = useGetProductsQuery(); // To refetch products
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (data?.data) {
      dispatch(addToCart(data.data)); // Ensure you pass the right product object
    }
  };

  const handelDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      await refetch();
      navigate(-1);
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            className="rounded-lg shadow-lg w-full h-96 object-cover"
            src={data?.data?.image}
            alt={data?.data?.name}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {data?.data?.name}
            </h1>
            <p className="mt-4 text-gray-700">{data?.data?.description}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <Star rating={data?.data?.rating} />
              </div>
              <span className="text-gray-700 ml-2">({data?.data?.rating})</span>
            </div>
            <span className="block text-gray-700 font-medium text-sm mr-2 mb-2">
              Quantity:{" "}
              {data?.data?.quantity > 0 ? (
                data?.data?.quantity
              ) : (
                <span className="text-red-500 font-bold">Stock Out</span>
              )}
            </span>
            <span className="block text-gray-700 font-medium text-sm mr-2 mb-2">
              Category: {data?.data?.category}
            </span>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-8">
            <div className="text-2xl font-bold text-green-600 mb-3">
              <span>Price: </span>
              {data?.data?.price}$
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={data?.data?.quantity <= 0}
              className="bg-green-500 hover:bg-lime-600 text-white text-base font-medium rounded p-2 my-2"
            >
              Add to Cart
            </Button>
            <Link
              className="bg-yellow-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5"
              to={`/products/${data?.data?._id}`}
            >
              Edit
            </Link>
            <Button
              onClick={() => handelDeleteProduct(data?.data?._id)}
              className="bg-red-500 hover:bg-red-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
