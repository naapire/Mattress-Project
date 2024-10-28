import React, { useState } from "react";
import Logo from ".../../../../assets/wsports.jpg";
import Phone from ".../../../../assets/phone-white.svg";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className="bg-[#f40000] p-6 fixed top-0 left-0 w-full z-50">
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

          {/* Search input with icon */}
          <div className="relative  hidden lg:block">
            <input
              type="search"
              placeholder="Search"
              className="px-8 py-2 rounded-md text-sm border-blue-500 text-gray-400 active:border w-72 pl-10 " // Added padding-left for space for the icon
            />
            <IoSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />{" "}
            {/* Positioned search icon */}
          </div>

          <div>
            <img className="w-8 h-8 md:w-12 md:h-12" src={Phone} alt="Phone" />
          </div>
         
        </section>
        <div className="relative text-center block lg:hidden">
  <input
    type="search"
    placeholder="Search"
    className="px-10 py-2 rounded-md text-sm border-blue-500 text-gray-400 active:border w-72 pl-10" // Increased padding-left for the icon
  />
  <IoSearch className="absolute right-28 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" /> {/* Positioned search icon inside the input */}
</div>
        {/* Main Menu */}
        <section className="justify-center items-center gap-10 text-white text-lg hidden lg:flex">
          <Link
            to={"/"}
            className="hover:text-[#f6d00c] hover:border-b-2 py-1 border-[#f6d00c]"
          >
            Home
          </Link>
          <Link
            to={"/Shop"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Shop
          </Link>
          <Link
            to={"/Service"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Service
          </Link>
          <Link
            to={"/About"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            About
          </Link>
          <Link
            to={"/Contact"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Contact
          </Link>
        </section>

        {/* Mobile Menu */}
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } text-white text-xl font-semibold pt-5 flex-col`}
        >
          <Link
            to={"/"}
            className="hover:text-[#f6d00c] hover:border-b-2 py-1 border-[#f6d00c]"
          >
            Home
          </Link>
          <Link
            to={"/Shop"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Shop
          </Link>
          <Link
            to={"/Service"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Service
          </Link>
          <Link
            to={"/About"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            About
          </Link>
          <Link
            to={"/Contact"}
            className="hover:text-[#f6d00c] hover:border-b py-1 border-[#f6d00c]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
