import Navbar from "../navbar";
import Footer from "../Footer";
import React from 'react'
import AboutImage from './../../../assets/AboutImage.avif'


function About() {
  return (
    <div className="bg-slate-100">
      <Navbar/>
     <section className="overflow-hidden bg-white py-8 sm:py-16 mt-[110px]">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  gap-4">
        <div className="w-[90%]">
          <img src={AboutImage} alt="" className=" max-w-full rounded-xl shadow-xl ring-1 ringgray-400/10 sm:w-[47rem] md:-ml-4 lg:-ml-0"/>
        </div>
        <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center align-middle">
        
        <h1 className="text-3xl text-black text-bold">About Mattress Home</h1>
        <section>

  <p className="py-4 text-lg text-gray-600 mb-5">
  Welcome to Mattress Home, your ultimate sleep partner and solution. We specialize in providing high-quality new mattresses and offer expert restoration services for your old ones. Our mission is to ensure you get the best sleep possible, tailored to your unique needs.
  </p>
  <ul>
    <li className="flex items-start text-gray-600 mb-5">
      
      <span>
        
      At Mattress Home, we understand that a good night's sleep is essential for a healthy and productive life. That’s why we offer a diverse range of mattresses from top brands such as Royal Foam, Latex Foam, Ashfoam, and various foreign brands. Whether you're looking for a new mattress or need to rejuvenate your existing one, we've got you covered.
      </span>
    </li>
    
    <li className="flex items-start text-gray-600 mb-5">
    
      <span>
        
      We are here to solve your sleep needs. Give us a call or chat with us today to find the perfect mattress that suits you. Experience the difference with Mattress Home, where your comfort and satisfaction are our top priorities.
      </span>
    </li>
    
    
  </ul>
  
 
  
</section>

        </div>
        
        </div>
      </div>
     </section>
      <Footer/>
    </div>
  )
}

export default About
