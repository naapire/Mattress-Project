import React from 'react'
import Products from './Products'

function FeaturedProduct() {
  return (
    <section className='bg-white px-10 my-6 shadow-md py-16 text-center w-full'>
        <h1 className='text-3xl font-semibold mb-4'>Our featured product</h1>
        <p className='px-10'>
            Take a look at our trending products. Browser through and see <br />what other people are buying
        </p>
       <div className='mt-14'>
       <Products/>
       </div>
      
    </section>
  )
}

export default FeaturedProduct
