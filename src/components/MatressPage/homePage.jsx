import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

import Sleepscience from ".../../../../assets/sleepscience.jpg";
import Latexfoam from ".../../../../assets/latexfoam.jpg";
import Ashfoam from ".../../../../assets/ashfoam.jpg";
import Royalfoam from ".../../../../assets/royalfoam.jpg";
import Carousel from "./Carousel";

function HomePage() {
  

  

  
  return (
    <div className="bg-[#f0eeee] ">
      <Navbar />

      <Carousel/>
      
      <section className="px-16">
        <div className="flex flex-col sm:flex-row gap-8 lg:my-6"> 
        <div className="sm:w-1/2 w-full lg:flex   bg-white border rounded-lg overflow-hidden border-gray-light undefined">
        <div className="h-40 sm:h-48 lg:auto lg:w-1/2 flex-none bg-cover bg-center"><img className="h-64 " src={Royalfoam} alt="" /></div>
        <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
          <div className="">
          <h3 className="font-bold text-xl text-gray-900 py-4">Royal Foam</h3>
           <p className="font-light text-lg text-gray-900 pb-14">Royal foam mattresses for luxurious sleep</p> 
           <div className=""><button className=" border rounded-md border-gray-700  py-3 px-5 sm:px-2">Explore Brand</button></div>
          </div>
        </div>
        </div>
        
        <div className="sm:w-1/2 w-full lg:flex   bg-white border rounded-lg overflow-hidden border-gray-light ">
        <div className="sm:h-48 lg:auto lg:w-1/2 flex-none bg-cover bg-center"><img className="h-64 " src={Latexfoam} alt="" /></div>
        <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
          <h3 className="font-bold text-xl text-gray-900 py-4">Latex Foam</h3>
           <p className="font-light text-lg text-gray-900 pb-14">Latex foam mattresses for your comfort</p> 
           <button className=" border rounded-md border-gray-700  py-3 px-5">Explore Brand</button>
        </div>
        </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 lg:my-6">
        <div className="sm:w-1/2 w-full lg:flex   bg-white border rounded-lg overflow-hidden border-gray-light ">
        <div className="sm:h-48 lg:auto lg:w-1/2 flex-none bg-cover bg-center"><img className="h-64 " src={Ashfoam} alt="" /></div>
        <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
          <h3 className="font-bold text-xl text-gray-900 py-4">Ash Foam</h3>
           <p className="font-light text-lg text-gray-900 pb-14">Ash foam mattresses for premium comfort</p> 
           <button className=" border rounded-md border-gray-700  py-3 px-5">Explore Brand</button>
        </div>
        </div>

        <div className="sm:w-1/2 w-full lg:flex   bg-white border rounded-lg overflow-hidden border-gray-light ">
        <div className="sm:h-48 lg:auto lg:w-1/2 flex-none bg-cover bg-center"><img className="h-64 " src={Sleepscience} alt="" /></div>
        <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
          <h3 className="font-bold text-xl text-gray-900 py-4">Other Brand</h3>
           <p className="font-light text-lg text-gray-900 pb-14">Other brand mattresses for various needs</p> 
           <button className=" border rounded-md border-gray-700  py-3 px-5">Explore Brand</button>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
