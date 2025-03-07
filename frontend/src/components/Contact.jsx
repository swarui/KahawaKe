import Mocha from "../assets/Mocha.jpeg";
import { useState } from "react";
import axios from "axios";

function Contact ()  {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/contact", formData);
            alert("Message sent successfully!");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message.");
        }
    };

    return (
        <div id="contact">
            {/* Header Section */}
            <div  style={{fontFamily:'Poppins'}} className="text-center mt-20">
                <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#3e2723] mb-2">Contact us</h1>
                <h2 className="text-center text-sm sm:text-base text-[#3e2723] mb-6">Reach Out</h2>
            </div>

            {/* Main Contact Section */}
            <section style={{fontFamily:'Poppins'}}  className="flex flex-col md:flex-row items-stretch justify-center p-4 md:p-8 gap-8">
                {/* Contact Form */}
                <div className="w-full md:w-[55%] flex flex-col bg-orange-100 border border-orange-800 rounded-lg p-6 md:p-10 shadow-md">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 h-full">
                        {/* First and Last Name */}
                        <div className="flex flex-row w-full space-x-4">
                            <div className="flex flex-col w-1/2">
                                <h2 className="text-sm sm:text-base mb-1">First Name</h2>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="text-sm sm:text-base border-b border-black focus:outline-none focus:border-orange-800"
                                    style={{ height: "7vh", fontFamily:'Poppins' }}
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <h2 className="text-sm sm:text-base mb-1">Last Name</h2>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="text-sm sm:text-base border-b border-black focus:outline-none focus:border-orange-800"
                                    style={{ height: "7vh" }}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col">
                            <h2 className="text-sm sm:text-base mb-1">Email Address</h2>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-sm sm:text-base border-b border-black focus:outline-none focus:border-orange-800"
                                style={{ height: "7vh" }}
                            />
                        </div>

                        {/* Your Message */}
                        <div className="flex flex-col">
                            <h2 className="text-sm sm:text-base mb-1">Your Message</h2>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="text-sm sm:text-base border-b border-black focus:outline-none focus:border-orange-800 resize-none"
                                style={{ height: "12vh" }}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 bg-orange-800 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-orange-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-[45%] flex items-center justify-center h-full">
                    <div className="w-full max-w-lg">
                        <img src={Mocha} className="w-full h-full object-cover border border-black rounded-lg shadow-lg" alt="Coffee with heart latte art" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
