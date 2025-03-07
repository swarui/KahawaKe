import { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesCircleSolid } from "react-icons/lia";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to show or hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // If scrolling down and scrolled past 100px, hide navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Main Body */}
      <div
        style={{ fontFamily: "Poppins", backgroundColor: "#EFE0BB" }}
        className={`fixed top-0 left-0 w-full h-16 flex justify-between z-50 text-black lg:py-2 px-10  transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <a href="#home">
            {" "}
            <img src={Logo} className="w-20 h-auto" alt="Logo" />
          </a>
        </div>
        {/* The opening and closing icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="flex items-center">
            <FaBarsStaggered
              size={20}
              className={`text-black mr-5 ${isOpen ? "hidden" : "block"}`}
            />
            <LiaTimesCircleSolid
              size={30}
              className={`z-10 mr-3 text-black cursor-pointer ${
                isOpen ? "block" : "hidden"
              } `}
            />
          </button>
        </div>
        {/* Main Navbar */}
        <div className="hidden lg:flex items-center justify-center w-full text-black">
          <ul style={{fontFamily:'Poppins'}}  className="flex flex-row gap-8 text-[14.7px] cursor-pointer">
            <a href="#home">
              <li className="hover:text-orange-800 " >Home</li>
              
            </a>
            <a href="#menu">
              <li className="hover:text-orange-800 "  >Menu</li>
            </a>
            <a href="#about">
              <li className="hover:text-orange-800 " >About Us</li>
            </a>
            <a href="#about">
              <li className="hover:text-orange-800 " >Service</li>
            </a>
            <a href="#contact">
              <li className="hover:text-orange-800 ">Contact</li>
            </a>
          </ul>
        </div>
        <div className="hidden lg:flex fixed right-10">
          <a href="mailto:mainastevew@gmail.com">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-black transition duration-500 hover:bg-green-700 rounded-full px-3 py-2 mt-1.5 shadow-lg text-[0.795em]">
              Get Voucher
            </button>
          </a>
        </div>
      </div>

      {/* Small Navbar */}
      <div
        style={{ fontFamily: "Poppins" }}
        className={`fixed top-0 right-0 w-full h-20vh text-center overflow-visible text-black bg-white bg-opacity-40 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col gap-3 mt-10 text-lg cursor-pointer px-4 font-medium text-[0.875em]">
          <a href="#home">
            {" "}
            <li onClick={toggleMenu}>Home</li>
          </a>
          <a href="#menu">
            {" "}
            <li onClick={toggleMenu}>Menu</li>
          </a>
          <a href="#about">
            {" "}
            <li onClick={toggleMenu}>About Us</li>
          </a>
          <a href="#service">
            <li onClick={toggleMenu}>Service</li>
          </a>
          <a href="#contact">
            <li onClick={toggleMenu}>Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
