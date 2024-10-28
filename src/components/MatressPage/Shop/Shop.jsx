import React from 'react'
import Navbar from '../navbar';
import Footer from '../Footer';
import Products from './Produce';

function Shop() {
  return (
    <div className='bg-[#f0eeee]'>
      <Navbar/>
      <section className='bg-[#f0eeee]'>
        
        <div className='mx-16'>
          <Products/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Shop
