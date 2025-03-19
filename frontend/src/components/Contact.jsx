"use client";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import "animate.css";
import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    messageSubject: "",
    companyInfo: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://kahawake-1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully.",
          icon: "success",
          timer: 2000,
          toast: true,
          position: "top-end",
        });
        setFormData({
          fullName: "",
          emailAddress: "",
          messageSubject: "",
          companyInfo: "",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Failed to send your message.",
          icon: "error",
          position: "top-end",
          toast: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again later.",
        icon: "error",
        position: "top-end",
        toast: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-12 lg:py-24 bg-orange-900 text-white ">
      <div style={{fontFamily:'Poppins'}}   className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4 text-black font-lg text-base sm:text-sm">
              Feel free to reach out to us for any inquiries or collaborations.
            </p>
            <div className="text-gray-300 mt-6 space-y-4">
              <p>
                <strong>Location</strong> <br /> Kahawa Ke Central Office <br /> 123 Coffee Lane, Kikuyu, KE
              </p>
              <p>
                <strong>Contact Us</strong> <br /> P: +254 790 224262 <br /> M: kahawake@gmail.com
              </p>
            </div>
            <div className="flex space-x-3 mt-5 text-xl">
              <a href="#" className="hover:text-orange-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-orange-500">
                <BsTwitterX />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4 bg-[#1a1a1a] rounded-lg border border-[#A14527] shadow-md">
            <h2 className="text-2xl font-bold text-orange-900 mb-6">Your Details</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {['fullName', 'emailAddress', 'messageSubject', 'companyInfo'].map((field) => (
                <input
                  key={field}
                  type={field === 'emailAddress' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === 'fullName' ? 'Full Name' :
                    field === 'emailAddress' ? 'Email Address' :
                    field === 'messageSubject' ? 'Subject' : 'Company / Guest Info'
                  }
                  className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                  required
                />
              ))}

              <button
                type="submit"
                className="w-full py-3 bg-orange-900 text-white text-lg rounded-md hover:bg-[#842E1A] transition-colors"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;