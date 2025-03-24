"use client"

import { motion } from "framer-motion"
import { Coffee, Download, Mail } from "lucide-react"
import kahawa from "../assets/Kahawa2.png"

export default function Home() {
  return (
    <div id="home" className="min-h-screen w-full mt-6 sm:mt-8 lg:mt-0 bg-amber-50/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5 -z-10 hidden sm:block">
        <Coffee className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-orange-800" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 -z-10 hidden sm:block">
        <Coffee className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-orange-800" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Text Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col text-center lg:text-left"
          >
            <div className="relative">
              <h1
                className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] font-bold text-orange-800 tracking-tighter leading-none"
                style={{ fontFamily: "moonet" }}
              >
                KAHAWA
              </h1>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-orange-800 to-orange-300 mt-1 sm:mt-2"
              />
            </div>

            <h2
              style={{ fontFamily: "Poppins" }}
              className="text-orange-800 font-semibold mt-2 text-base sm:text-lg md:text-xl"
            >
              Awaken your senses
            </h2>

            <p
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-base mt-3 sm:mt-4 md:mt-6 leading-relaxed text-stone-700 max-w-xl mx-auto lg:mx-0"
            >
              Because life is too short for bland coffee. Our brews are an invitation to taste, to feel, to savor with
              our premium Kenyan Brewed Coffee. Each cup tells a story of rich heritage and exceptional quality.
            </p>

            <div className="w-auto flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mt-5 sm:mt-6 md:mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "Poppins" }}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-white shadow-lg border border-green-900 bg-green-800 hover:bg-green-700 rounded-md text-xs sm:text-sm transition-colors duration-300"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "Poppins" }}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-orange-800 shadow-lg border border-orange-300 hover:bg-orange-100 rounded-md text-xs sm:text-sm transition-colors duration-300"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Newsletter
              </motion.button>
            </div>

            {/* Social proof or additional info */}
            <div className="mt-5 sm:mt-6 md:mt-8 flex items-center gap-2 text-stone-600 justify-center lg:justify-start">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm">Loved by 10,000+ coffee enthusiasts</p>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
              {/* Background decorative circle */}
              <div
                className="absolute inset-0 bg-gradient-to-br  rounded-md opacity-30 
                              w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] lg:w-full lg:h-full 
                              transform -translate-x-2 sm:-translate-x-3 md:-translate-x-4 
                              translate-y-2 sm:translate-y-3 md:translate-y-4 mx-auto"
              />

              {/* Main image with shadow */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-[90%] sm:w-[95%] md:w-full mx-auto">
                <img
                  className="w-full h-auto object-cover"
                  src={kahawa || "/placeholder.svg"}
                  alt="Kahawa premium coffee"
                  loading="eager"
                />
              </div>

              {/* Floating badge - UPDATED to be more balanced and responsive */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-white rounded-full shadow-lg p-1.5 sm:p-2 md:p-2.5 z-20"
              >
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="bg-orange-800 text-white rounded-full 
                            w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
                            flex flex-col items-center justify-center text-center p-0.5 sm:p-1"
                >
                  <span className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs">Premium</span>
                  <span className="font-bold text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base">Kenyan</span>
                  <span className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs">Coffee</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

