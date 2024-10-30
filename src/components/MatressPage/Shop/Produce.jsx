import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../Axios/axiosinstance';

// Product Component
function Product({ product }) {
  const imgUrl = `${import.meta.env.VITE_APP_API_URL}/${product.pictures[0]?.image_path || ''}`;
  
  return (
    <>
    
    <div className='w-full pb-16 bg-white shadow-md rounded-lg  '>
      <div className='h-[60%] w-full'>
        <img className='h-full w-full object-cover rounded-t-lg' src={imgUrl} alt={product.name || 'Product Image'} />
      </div>
      <div className='flex justify-between flex-col font-semibold lg:text-lg text-sm px-2'>
        <h3>{product.name}</h3>
        <h3 className='text-red-500 my-3'> GH₵ {product.prices?.[0]?.price || "N/A"}- GH₵ {product.prices?.[1]?.price || "N/A"}</h3>
        <h4 className='text-gray-700 text-sm mb-4 line-clamp-3'>{product.description}</h4>

      </div>
      <button className="bg-gray-600 ml-3 border rounded-md border-gray-700 py-2 w-12 min-w-[150px] px-2 text-sm">Explore</button> 
    </div>
    </>
  );
}

// Products Component
function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products to display per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/products');
        setData(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading products, please wait...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className='mt-[160px]'><h2 className='text-xl text-center mb-5 font-bold'>Choose a Filter</h2></div>
        <div className='flex justify-center gap-3 mb-5 flex-wrap mx-3'>
            <button className=' border-2 border-[#f6d00c] px-5 py-1 rounded-lg cursor-pointer min-w-36 text-center text-white bg-[#7e00a9]'>Royal Foam</button>
            <button className=' border-2 border-[#f6d00c] px-5 py-1 rounded-lg cursor-pointer min-w-36 text-center text-white bg-red-500'>Latex Foam</button>
            <button className=' border-2 border-[#f6d00c] px-5 py-1 rounded-lg cursor-pointer min-w-36 text-center text-white bg-[#f6d00c]'>Ash Foam</button>
            <button className=' border-2 border-[#f6d00c] px-5 py-1 rounded-lg cursor-pointer min-w-36 text-center text-white bg-black'>Foreign Brand</button>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      
      <div className='flex justify-end items-end mt-4 space-x-2 ' >
        <div className='bg-white'>
        <button 
          className={`px-3 py-2 rounded-l-lg text-gray-500 border border-gray-300 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`} 
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            className={`px-4 py-2 border border-gray-300 ${currentPage === index + 1 ? 'bg-gray-300 text-gray-700 font-semibold' : 'text-gray-500 hover:bg-gray-200'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          className={`px-3 py-2 rounded-r-lg text-gray-500 border border-gray-300 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`} 
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        </div>
      </div>
    </>
  );
}

export default Products;
