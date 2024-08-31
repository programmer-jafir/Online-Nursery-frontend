
import { useAppSelector } from '@/redux/hook';
import Card from '../Card/Card';
import { useGetProductsQuery } from '@/redux/api/api';

const AllProducts = () => {
    const {data: products, isLoading, isError} = useGetProductsQuery(undefined);
    const searchTerm = useAppSelector((state) => state.search.searchTerm.toLowerCase());
    if(isLoading){
      return <p>Loading...</p>
    }
if(isError)
    return <p>Ops something went wrong</p>

// Filter Products based on the Search

const filteredProducts = products?.data?.filter((product) =>
  product.name.toLowerCase().includes(searchTerm)
);
    return (
    <div id='product' className="bg-gray-100">
    <h1 className="text-4xl text-green-500 font-bold text-center py-10">All Products</h1>
    <div id="products" className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
        {/* Unexist Product error */}
        {filteredProducts?.length === 0 ? (
          <p className="text-2xl text-red-500 font-semibold">
            No products found for "{searchTerm}"
          </p>
        ) : (
          // All Products
          filteredProducts?.map((product) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>
  </div>
    );
};

export default AllProducts;