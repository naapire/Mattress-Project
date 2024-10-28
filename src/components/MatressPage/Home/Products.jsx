import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../Axios/axiosinstance';

// Product Component
function Product({ product }) {
  const imgUrl=`${import.meta.env.VITE_APP_API_URL }/${product.pictures[0].image_path}`;
 
  return (
    <div className=' w-full py-9'> 
      <div className='h-[83%] w-full'>
        <img className='h-full w-full object-cover' src={imgUrl} alt={product.title} />
      </div>
      <div className='flex justify-between font-semibold lg:text-lg text-sm px-2'>
        <h3 className='text-left'>{product.name}</h3>
        <h3 className='text-right'>GH₵ {product.prices?.[0]?.price || "N/A"}</h3>
      </div>
    </div>
  );
}

// Products Component
function Products() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/products/limit/8');
        setData(response.data.products);
        
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='grid  grid-cols-2 lg:grid-cols-4 gap-5'> 
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
