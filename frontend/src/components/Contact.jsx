"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-[#F9F1E7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 bg-[#F4D8B5] rounded-lg border border-[#A14527] shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A14527] mb-6">Get in Touch</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#A14527] bg-transparent focus:outline-none focus:border-[#842E1A] py-2 px-1 transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#A14527] bg-transparent focus:outline-none focus:border-[#842E1A] py-2 px-1 transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-lg font-medium text-gray-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-b-2 border-[#A14527] bg-transparent focus:outline-none focus:border-[#842E1A] py-2 px-1 transition-colors resize-y min-h-[100px]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#A14527] text-white text-lg rounded-md hover:bg-[#842E1A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A14527] focus:ring-opacity-50 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto rounded-lg overflow-hidden border border-[#A14527] shadow-md">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Coffee with heart art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

