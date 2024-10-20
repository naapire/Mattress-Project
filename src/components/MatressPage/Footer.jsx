import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="bg-[#f40000] grid grid-flow-col grid-cols-3 gap-10 px-10 py-7 text-white ">
        <div className="text">
          <div className="pb-6 text-2xl">Quick Links</div>
          <hr />
          <div className=" flex flex-col gap-4 pt-5">
            <li>View Product</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div>
          <div className="pb-6 text-2xl">Follow Mattress Home</div>
          <hr />
          <div className="flex text-4xl lg-gap-10 pt-5">
            <div>
              <BsFacebook  className=" hover:text-yellow-400"/>
            </div>
            <div>
              <FaTwitter className=" hover:text-yellow-400"/>
            </div>
            <div>
              <FaInstagram className=" hover:text-yellow-400"/>
            </div>
            <div>
              <FaLinkedin className=" hover:text-yellow-400"/>
            </div>
          </div>
        </div>
        <div>
          <div className="pb-6 text-2xl">About Us</div>
          <hr />
          <div className="text-lg">
            Mattress Home is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure that
            everyone can enjoy a good night's sleep with our wide range of
            products.
          </div>
        </div>
      </section>
      <div className="bg-gray-700 border-2 border-white border-x-0 text-center py-5  font-bold text-white" ><p className="mx-2">© 2024 MATTRESS HOME Developed By CHARLES OWUSU BIH</p></div>
    </div>
  );
}

export default Footer;
