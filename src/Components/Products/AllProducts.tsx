import { useAppSelector } from '@/redux/hook';
import Card from '../Card/Card';
import { useGetProductsQuery } from '@/redux/api/api';
import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { Button } from '../ui/button';

const AllProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const searchTerm = useAppSelector((state) => state.search.searchTerm.toLowerCase());
  
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 9; 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Ops something went wrong</p>;
  }

  
  const filteredProducts = products?.data?.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm)
  );

 
  const totalItems = filteredProducts?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts?.slice(startIndex, startIndex + itemsPerPage);

 
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="product" className="bg-gray-100">
      <h1 className="text-4xl text-green-500 font-bold text-center py-10">All Products</h1>
      <div id="products" className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
        
        {currentItems?.length === 0 ? (
          <p className="text-2xl text-red-500 font-semibold">
            No products found for "{searchTerm}"
          </p>
        ) : (
          
          currentItems?.map((product: any) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>

      
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-5">
          <Button
            className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </Button>
          <span className="mx-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;