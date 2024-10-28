import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Sleepscience from ".../../../../../assets/sleepscience.jpg";
import Latexfoam from ".../../../../../assets/latexfoam.jpg";
import Ashfoam from ".../../../../../assets/ashfoam.jpg";
import Royalfoam from ".../../../../../assets/royalfoam.jpg";
import FeaturedProduct from "./FeaturedProduct";
import Carousel from "./Carousel";

function HomePage() {
  return (
    <div className="bg-[#f0eeee]">
      <Navbar />

      <Carousel />

      <section className="px-0 sm:px-16">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row gap-8 sm:my-6">
          <div className="sm:w-1/2 w-full lg:flex bg-white border rounded-lg overflow-hidden border-gray-light">
            <div className="h-40 sm:h-48 lg:w-1/2 flex-none bg-cover bg-center">
              <img className="w-full h-full lg:h-[240px] object-cover" src={Royalfoam} alt="Royal Foam" />
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
              <h3 className="font-bold text-xl text-gray-900 py-4">Royal Foam</h3>
              <p className="font-light text-lg text-gray-900 pb-14">Royal foam mattresses for luxurious sleep</p>
              <button className="border rounded-md border-gray-700 py-2 w-12 min-w-[150px] px-2 text-sm">Explore</button> {/* Button width reduced */}
            </div>
          </div>

          <div className="sm:w-1/2 w-full lg:flex bg-white border rounded-lg overflow-hidden border-gray-light">
            <div className="h-40 sm:h-48 lg:w-1/2 flex-none bg-cover bg-center">
              <img className="w-full h-full lg:h-[240px] object-cover" src={Latexfoam} alt="Latex Foam" />
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
              <h3 className="font-bold text-xl text-gray-900 py-4">Latex Foam</h3>
              <p className="font-light text-lg text-gray-900 pb-14">Latex foam mattresses for your comfort</p>
              <button className="border rounded-md border-gray-700 py-2 w-12 min-w-[150px] px-2 text-sm">Explore</button> {/* Button width reduced */}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row gap-8 lg:my-6">
          <div className="sm:w-1/2 w-full lg:flex bg-white border rounded-lg overflow-hidden border-gray-light">
            <div className="h-40 sm:h-48 lg:w-1/2 flex-none bg-cover bg-center">
              <img className="w-full h-full lg:h-[240px] object-cover" src={Ashfoam} alt="Ash Foam" />
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
              <h3 className="font-bold text-xl text-gray-900 py-4">Ash Foam</h3>
              <p className="font-light text-lg text-gray-900 pb-14">Ash foam mattresses for premium comfort</p>
              <button className="border rounded-md border-gray-700 py-2 w-12 min-w-[150px] px-2 text-sm">Explore</button> {/* Button width reduced */}
            </div>
          </div>

          <div className="sm:w-1/2 w-full lg:flex bg-white border rounded-lg overflow-hidden border-gray-light">
            <div className="h-40 sm:h-48 lg:w-1/2 flex-none bg-cover bg-center">
              <img className="w-full h-full lg:h-[240px] object-cover" src={Sleepscience} alt="Other Brand" />
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
              <h3 className="font-bold text-xl text-gray-900 py-0">Other Brand</h3>
              <p className="font-light text-lg text-gray-900 pb-6">Other brand mattresses for various needs</p>
              <button className="border rounded-md border-gray-700 py-2 w-12 min-w-[150px] px-2 text-sm">Explore</button> {/* Button width reduced */}
            </div>
          </div>
        </div>
      </section>
      <div className="sm:px-16">
      <FeaturedProduct/>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
