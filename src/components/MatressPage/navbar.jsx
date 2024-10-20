import React from 'react'
import  { useState } from "react";
import Logo from ".../../../../assets/wsports.jpg";
import Phone from ".../../../../assets/phone-white.svg";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <nav className="bg-[#f40000] p-6">
        <section className="flex items-center justify-between">
          {openMenu ? (
            <RiCloseLine
              className="lg:hidden text-5xl text-white"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <IoMdMenu
              className="lg:hidden text-5xl text-white"
              onClick={() => setOpenMenu(true)}
            />
          )}

          <div className="w-36 h-14">
            <img className="w-36 h-14" src={Logo} alt="Logo" />
          </div>
          <div>
            <input
              type="search"
              placeholder="Search"
              className="px-8 py-2 rounded-md text-sm border-blue-500 text-gray-400 active:border w-72"
            />
          </div>
          <div>
            <img className="w-8 h-8 md:w-12 md:h-12" src={Phone} alt="Phone" />
          </div>
        </section>

        {/* Main Menu */}
        <section className="justify-center items-center gap-10 text-white text-lg hidden lg:flex">
          <div className="hover:text-[#f6d00c] hover:border-b-2 py-1 border-[#f6d00c]">Home</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Shop</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Service</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">About</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Contact</div>
        </section>

        {/* Mobile Menu */}
        <div className={` ${openMenu ? 'flex' : 'hidden'} text-white text-xl font-semibold pt-5 flex-col`}>
          <div className="hover:text-[#f6d00c] hover:border-b-2 py-1 border-[#f6d00c]">Home</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Shop</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Service</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">About</div>
          <div className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]">Contact</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
