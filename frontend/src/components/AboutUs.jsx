"use client"

import { motion } from "framer-motion"
import { Coffee, MapPin, Award, Users } from "lucide-react"
import img from "../assets/About.png"

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <div id="about" className="bg-gradient-to-b from-amber-50/50 to-white py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2
            style={{ fontFamily: "Poppins" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-2"
          >
            Who are we?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-8 sm:w-10 bg-orange-800/50"></div>
            <h3
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-md uppercase tracking-wider text-orange-800/80"
            >
              About Us
            </h3>
            <div className="h-[1px] w-8 sm:w-10 bg-orange-800/50"></div>
          </div>
          <p  style={{fontFamily:'Poppins'}}  className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base mt-4">
            Discover the story behind Kenya's most beloved coffee brand
          </p>
        </motion.div>

        <div className="flex lg:flex-row flex-col w-full mx-auto items-center lg:space-x-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 blur-lg opacity-20 transform scale-110"></div>
              <div className="relative p-2 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full">
                <img
                  src={img}
                  className="w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] aspect-square object-cover rounded-full shadow-lg"
                  alt="Kahawa Ke coffee experience"
                />
              </div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-2 z-10"
              >
                <div className="bg-green-800 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-center">
                  <span className="text-xs">Since</span>
                  <span className="font-bold">2024</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-stone-700 max-w-xl"
            >
              <span className="font-semibold text-orange-800">Kahawa Ke</span>, where coffee and comfort come together
              in perfect harmony. Nestled in the heart of Nairobi, Kenya, we pride ourselves on offering a unique
              experience for coffee lovers and travelers alike.
            </motion.p>

            <motion.p
              variants={itemVariants}
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-stone-700 max-w-xl"
            >
              At Kahawa Ke, we believe that great coffee isn't just a drink, it's a lifestyle. Our beans are ethically
              sourced from local Kenyan farmers, ensuring the highest quality and supporting our community.
            </motion.p>



          </motion.div>
        </div>
      </div>
    </div>
  )
}
