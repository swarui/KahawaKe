"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Coffee } from "lucide-react"
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLinkClick = (href) => {
    const targetSection = document.querySelector(href)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => setIsOpen(false), 300)
    }
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionPositions = navLinks
        .map((link) => {
          const section = document.querySelector(link.href)
          if (section) {
            return { name: link.href.substring(1), offset: section.offsetTop }
          }
          return null
        })
        .filter(Boolean)

      const currentSection = sectionPositions.reduce((prev, curr) => {
        return scrollPosition >= curr.offset ? curr : prev
      }, sectionPositions[0])

      if (currentSection) {
        setActiveSection(currentSection.name)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          style={{ fontFamily: "Poppins" }}
          className="bg-gradient-to-r from-amber-50 to-amber-100 backdrop-blur-sm border-b border-amber-200/50 shadow-sm"
        >
          <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <img src={logo} alt="Kahawa Ke Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-orange-900 text-lg lg:text-xl hidden sm:block">Kahawa Ke</span>
            </a>

            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex gap-8 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative py-2 px-1 transition-colors duration-300 ${
                        activeSection === link.href.substring(1)
                          ? "text-orange-800"
                          : "text-stone-700 hover:text-orange-800"
                      }`}
                    >
                      {link.name}
                      {activeSection === link.href.substring(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-800"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-700 to-orange-800 text-white py-2 px-4 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Coffee className="w-4 h-4" />
                Get Voucher
              </motion.a>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-stone-700 hover:text-orange-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-amber-50 border-b border-amber-200 shadow-md overflow-hidden z-[100]"
            >
              <div style={{fontFamily:'Poppins'}} className="container mx-auto px-4 py-4">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                          activeSection === link.href.substring(1)
                            ? "bg-orange-100 text-orange-800 font-medium"
                            : "text-stone-700 hover:bg-orange-50 hover:text-orange-800"
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-700 to-orange-800 text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm mt-2"
                    >
                      <Coffee className="w-4 h-4" />
                      Get Voucher
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
