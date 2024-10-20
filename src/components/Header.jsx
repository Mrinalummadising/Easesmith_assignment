import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { LiaShoppingCartSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";
import TopBanner from "./TopBanner";
import { AiOutlineDown } from "react-icons/ai";

const Header = ({ cartQuantity }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <TopBanner />

      <header className="pt-6 mb-4 bg-white ">
        <div className="container flex items-center justify-between px-4 mx-auto">

          <Link to="/">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="object-contain mr-2 w-14" />
              <span className="text-2xl font-semibold hidden md:block text-[#0F4811]">
                Chaperone
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-4 md:hidden">
            <LuUser2
              size={22}
              className="text-black font-[500] hover:text-gray-900 cursor-pointer"
            />
            <div className="relative">
              <LiaShoppingCartSolid
                size={28}
                className="text-black font-[500] hover:text-gray-900 cursor-pointer"
              />
              <div className="absolute -top-3 right-0 bg-[#F3A939] text-black text-xs font-bold px-1 rounded-full">
                {cartQuantity}
              </div>
            </div>

            {isMenuOpen ? (
              <FiX size={28} className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FiMenu
                size={28}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>

          <nav className="hidden md:flex space-x-6 text-[16px] font-[500] text-[#000000]">
            <Link
              to="/"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/" ? "text-[#F3A939]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/shop" ? "text-[#F3A939]" : ""
              }`}
            >
              Plants & Pots
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#F3A939] flex items-center ${
                location.pathname === "/about" ? "text-[#F3A939]" : ""
              }`}
            >
              Tools{" "}
              <AiOutlineDown color="#000" className="mt-1 ml-1 font-bold" />
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#F3A939] flex items-center ${
                location.pathname === "/contact" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Services{" "}
              <AiOutlineDown
                size={16}
                color="#000"
                className="mt-1 ml-1 font-bold"
              />
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/blog" ? "text-[#F3A939]" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/story"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/story" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/faqs"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/faqs" ? "text-[#F3A939]" : ""
              }`}
            >
              FAQs
            </Link>
            {/* Add more links as needed */}
          </nav>

          <div className="items-center hidden space-x-6 md:flex">
            <div className="flex flex-col items-center">
              <LuUser2
                size={22}
                className="text-black font-[500] hover:text-[#F3A939] cursor-pointer"
              />
              <span className="text-sm hidden md:block font-[500]">
                My Profile
              </span>
            </div>

            <div className="relative flex flex-col items-center ">
              <LiaShoppingCartSolid
                size={28}
                className="text-black font-[500]   cursor-pointer"
              />
              <span className="text-sm hidden md:block  font-[500]">Cart</span>
              <div className="absolute -top-4 -right-2 bg-[#F3A939] text-black text-xs font-normal px-[6px] py-[2px] rounded-full">
                {cartQuantity}
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col h-full px-4 py-2 mt-4 space-y-4 bg-white md:hidden">
            <Link
              to="/"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/" ? "text-[#F3A939]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/shop" ? "text-[#F3A939]" : ""
              }`}
            >
              Plants & Pots
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/about" ? "text-[#F3A939]" : ""
              }`}
            >
              Tools
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/contact" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/blog" ? "text-[#F3A939]" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/story"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/story" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/faqs"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/faqs" ? "text-[#F3A939]" : ""
              }`}
            >
              FAQs
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
