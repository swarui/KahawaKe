import Logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-orange-900 text-gray-300 py-10 px-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-6 gap-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <img src={Logo} className="w-16 h-auto" alt="Kahawa Ke Logo" />
          <h2
            style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            className="text-xl sm:text-2xl"
          >
            Kahawa Ke
          </h2>
        </div>

        {/* Navigation Links */}
        <nav
          style={{ fontFamily: "Poppins" }}
          className="flex flex-wrap justify-center gap-6 text-sm sm:text-md font-medium"
        >
          <a
            href="#home"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#service"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Service
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-6 gap-8">
        {/* Contact Information */}
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex flex-row justify-between flex-wrap gap-8 md:gap-16 text-sm sm:text-md"
        >
          <p>
            Location <br />
            Kahawa Ke Central Office <br />
            123 Coffee Lane, Kikuyu, KE
          </p>
          <p>
            Contact Us <br />
            P: +254 790 224 262 <br />
            M: contact@kahawake.co.ke
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start md:justify-center gap-4 text-center sm:justify-center">
          <a href="#" className="hover:text-orange-500 transition duration-300">
            <FaInstagram className="w-6 h-5 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="hover:text-orange-500 transition duration-300">
            <BsTwitterX className="w-6 h-5 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="hover:text-orange-500 transition duration-300">
            <FaFacebookF className="w-6 h-5 sm:w-5 sm:h-5" />
          </a>
        </div>
        
      </div>
 


    </footer>
  );
}

export default Footer;
