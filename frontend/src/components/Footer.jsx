import Logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-gray-300  px-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb- gap-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <img href="https://kahawa-ke.netlify.app/"
   src={Logo} className="w-16 h-auto" alt="Kahawa Ke Logo" />
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

      <div
  style={{ fontFamily: "Poppins" }}
  className="flex justify-center py-4"
>
  <span className="bg-slate-100 px-2 py-1 text-[12px] text-black">
    © Kahawa Ke 2024, built by
    <a
      href="https://swarui.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className=" underline ml-1"
    >
      this guy
    </a>
  </span>
</div>
 


    </footer>
  );
}

export default Footer;
