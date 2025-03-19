"use client"

import { motion } from "framer-motion"
import { Coffee, Download, Mail, ChevronDown } from "lucide-react"
import kahawa from '../assets/Kahawa2.png'

export default function Home() {
  return (
    <div  id="home" className="min-h-screen bg-amber-50/50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5 -z-10">
        <Coffee className="w-40 h-40 sm:w-64 sm:h-64 text-orange-800" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 -z-10">
        <Coffee className="w-40 h-40 sm:w-64 sm:h-64 text-orange-800" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Text Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:mt-[8vh] flex flex-col lg:text-left"
          >
            <div className="relative">
              <h1
                className="text-[3.5em] sm:text-[5em] lg:text-[8.5em] xl:text-[10.5em] font-bold text-orange-800 tracking-tighter leading-none"
                style={{ fontFamily: "moonet" }}
              >
                KAHAWA
              </h1>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-orange-800 to-orange-300 mt-2"
              />
            </div>

            <h2 style={{ fontFamily: "Poppins" }} className="text-orange-800 font-semibold mt-2 text-lg sm:text-xl">
              Awaken your senses
            </h2>

            <p
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-stone-700 max-w-xl"
            >
              Because life is too short for bland coffee. Our brews are an invitation to taste, to feel, to savor with
              our premium Kenyan Brewed Coffee. Each cup tells a story of rich heritage and exceptional quality.
            </p>

            <div className="w-auto flex flex-wrap gap-4 lg:gap-6 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "Poppins" }}
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 text-white shadow-lg border border-green-900 bg-green-800 hover:bg-green-700 rounded-md text-xs sm:text-sm transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "Poppins" }}
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 text-orange-800 shadow-lg border border-orange-300 hover:bg-orange-100 rounded-md text-xs sm:text-sm transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Newsletter
              </motion.button>
            </div>

            {/* Social proof or additional info */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-stone-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"
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
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              {/* Background decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-100 rounded-full opacity-30 transform -translate-x-4 translate-y-4" />

              {/* Main image with shadow */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-auto object-cover" src={kahawa} alt="Kahawa premium coffee" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-3 z-20"
              >
                <div className="bg-orange-800 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] sm:text-xs">Premium</span>
                  <span className="font-bold">Kenyan</span>
                  <span className="text-[10px] sm:text-xs">Coffee</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
