import Logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300  px-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb- gap-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
        <a href="https://kahawa-ke.netlify.app/"  rel="noopener noreferrer">
    <img 
      src={Logo} 
      className="w-16 h-auto filter brightness-500"
      alt="Kahawa Ke Logo" 
    />
  </a>
          <h2
            style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            className="text-xl sm:text-2xl"
          ></h2>
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

      <div
  style={{ fontFamily: "Poppins" }}
  className="flex justify-center py-4 px-4 text-center"
>
  <span className="bg-slate-100 px-3 py-2 text-[10px] sm:text-[10px] md:text-[11px] text-black">
    © Kahawa Ke 2024, built by
    <a
      href="https://swarui.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="underline ml-1"
    >
      this guy
    </a>
  </span>
</div>

    </footer>
  );
}

export default Footer;
