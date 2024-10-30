import Navbar from "../navbar";
import Footer from "../Footer";
import React from 'react'
import ServiceImage from './../../../assets/service.avif';
import { SiBookstack } from "react-icons/si";
import { BiCloudUpload } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";

function Service() {
  return (
    <div className="bg-slate-100">
      <Navbar/>
     <section className="overflow-hidden bg-white py-8 sm:py-16 mt-[110px]">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
        <div className="lg:pr-8 lg:pt-4">
        <h2 className="text-2xl text-yellow-200 text-bold">Sleep Better</h2>
        <h1 className="text-3xl text-black text-bold">Our Services | Mattress Home</h1>
        <section>
  <p className="py-6 text-lg text-gray-600 my-8">
    At Mattress Home, we are dedicated to providing top-notch services that cater to your sleep needs. Whether you need a new mattress or wish to restore your old one, we have the perfect solution for you.
  </p>
  <ul>
    <li className="flex items-start text-gray-600 mb-8">
      <span className="text-yellow-300 mr-2"><SiBookstack/></span> 
      <span>
        <span className="text-black  pr-1">New Mattresses:</span>
        Choose from our wide range of high-quality mattresses from popular brands like Royal Foam, Latex Foam, Ashfoam, and other foreign brands.
      </span>
    </li>
    
    <li className="flex items-start text-gray-600 mb-8">
      <span className="text-yellow-300 mr-2"><BiCloudUpload /></span>
      <span>
        <span className="text-black  pr-1">Restoration Services:</span>
        Give your old mattress a new life with our professional restoration services, ensuring comfort and durability.
      </span>
    </li>
    
    <li className="flex items-start text-gray-600 mb-8">
      <span className="text-yellow-300 mr-2"><VscTools /></span>
      <span>
        <span className="text-black pr-1">Customer Support:</span>
        We are here to solve your sleep needs. Give us a call or chat with us for personalized recommendations and assistance.
      </span>
    </li>
  </ul>
  
  <div className="flex gap-4 mt-4">
    <button className="text-gray-600 border-2 rounded-lg px-3 py-2 bg-yellow-400">Contact Us</button>
    <div className="text-gray-600 flex items-center">
      Learn more <GrLinkNext className="ml-1" />
    </div>
  </div>
</section>

        </div>
        <div>
          <img src={ServiceImage} alt="" className="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ringgray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"/>
        </div>
        </div>
      </div>
     </section>
      <Footer/>
    </div>
  )
}

export default Service
