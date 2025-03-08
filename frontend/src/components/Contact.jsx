"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (

    <>
    <div id="contact" ></div>
    <section  style={{fontFamily:'Poppins'}} className="w-full py-8 md:py-12 lg:py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 text-gray-400">
            We're here to help you with any inquiries, collaborations, or concerns you may have. Our team is dedicated to providing the support you need. 
            </p>
            <p className="mb-6 text-gray-400" >Whether you're seeking information about our services, exploring partnership opportunities, or simply want to say hello, we encourage you to reach out. </p>
            <p className="mb-6 text-gray-400">We value your input and look forward to connecting with you soon.</p>
            <div className="space-y-4">
              <p>📍 Nairobi, Kenya</p>
              <p>🕒 Open 9AM - 5PM</p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-1/2 p-4 bg-[#1a1a1a] rounded-lg border border-[#A14527] shadow-md">
            <h2 className="text-2xl font-bold text-orange-900 mb-6">Your Details</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                required
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-transparent border-b border-orange-900 py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Guest Info"
                className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 focus:outline-none focus:border-[#842E1A]"
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-orange-900 text-white text-lg rounded-md hover:bg-[#842E1A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A14527] focus:ring-opacity-50 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactSection
