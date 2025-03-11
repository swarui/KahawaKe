"use client";

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
      const response = await fetch("https://kahawake-1.onrender.com//contact", {
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
          customClass: {
            popup: "rounded-md w-72 h-26 font-poppins",
            title: "text-sm",
            htmlContainer: "text-xs",
          },
          showConfirmButton: false,
          timerProgressBar: true,
          showClass: {
            popup: "animate__animated animate__fadeIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Failed to send your message.",
          icon: "error",
          position: "top-end",
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "rounded-md w-72 h-26 font-poppins",
            title: "text-sm",
            htmlContainer: "text-xs",
          },
          timerProgressBar: true,
          showClass: {
            popup: "animate__animated animate__shakeX",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again later.",
        icon: "error",
        position: "top-end",
        toast: true,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "rounded-lg w-72 h-28 font-Poppins",
          title: "text-sm",
          htmlContainer: "text-xs",
        },
        timerProgressBar: true,
        showClass: {
          popup: "animate__animated animate__shakeX",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOut",
        },
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div id="contact"></div>
      <section
        style={{ fontFamily: "Poppins" }}
        className="w-full py-8 md:py-12 lg:py-16 bg-black text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6 text-gray-400">
                Feel free to reach out to us for any inquiries or
                collaborations. We're here to assist you and answer any
                questions you may have.
              </p>
              <p className="mb-6 text-gray-400">
                Our team is dedicated to providing the support you need. Whether
                you're looking for partnership opportunities, information about
                our services, or simply want to say hello, we'd love to hear
                from you.
              </p>
            </div>

            <div className="w-full lg:w-1/2 p-4 bg-[#1a1a1a] rounded-lg border border-[#A14527] shadow-md">
              <h2 className="text-2xl font-bold text-orange-900 mb-6">
                Your Details
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                  required
                />

                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                  required
                />

                <input
                  type="text"
                  name="messageSubject"
                  value={formData.messageSubject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                  required
                />

                <input
                  type="text"
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleChange}
                  placeholder="Company / Guest Info"
                  className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-900 text-white text-lg rounded-md hover:bg-[#842E1A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A14527] focus:ring-opacity-50 shadow-md"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
