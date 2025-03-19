import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import Iced from "../assets/Iced.jpeg";
import Latte from "../assets/Latte.jpeg";
import Mocha from "../assets/Mocha.jpeg";
import Ricano from "../assets/Ricano.png";
import Americano from "../assets/Americano.jpeg";
import Breve from "../assets/Breve.png";
import Cappuccino from "../assets/Capucino.jpeg";
import Corado from "../assets/Corado.jpeg";
import Brew1 from "../assets/Brew1.jpeg";
import Brew2 from "../assets/Brew2.jpeg";
import Brew3 from "../assets/Brew3.png";
import Brew4 from "../assets/Brew4.png";
import Brew5 from "../assets/Brew5.png";
import Brew6 from "../assets/Brew6.jpeg";
import Brew7 from "../assets/Brew7.jpeg";
import { motion } from "framer-motion";

function Service() {
  const slides = [
    {
      id: 1,
      img: Iced,
      title: "Best Coffee Flavor",
      description:
        "Experience the rich taste of our coffee and sip your way to relaxation. ",
      link: "#contact",
    },
    {
      id: 2,
      img: Brew7,
      title: "Barista Workshops & Classes",
      description:
        "Master the Art of Coffee. Join Our Barista Workshops & Classes .",
      link: "#contact",
    },
    {
      id: 3,
      img: Brew6,
      title: "Corporate & Event Catering",
      description: "Bringing the Brew to You! Perfect Coffee for Any Event",
      link: "#contact",
    },
    {
      id: 4,
      img: Brew5,
      title: "Take away Coffee",
      description:
        "Grab & Go! Freshly Brewed Coffee for Busy Days,brewed to Perfection!",
      link: "#contact",
    },
    {
      id: 5,
      img: Brew4,
      title: "Coffee Tasting Experiences",
      description:
        "Dive into the World of Flavors with Our Exclusive Coffee Tasting Experience ☕✨",
      link: "#contact",
    },
    {
      id: 6,
      img: Brew1,
      title: "Special Brewed Coffee",
      description:
        "Savor the Moment with freshly Brewed Coffee.Unique flavors in every brew.",
      link: "#contact",
    },
    {
      id: 7,
      img: Brew3,
      title: "Ready Coffee Beans",
      description:
        "Elevate your brew at home with aromatic beans for the ultimate coffee experience.",
      link: "#contact",
    },
    {
      id: 8,
      img: Brew2,
      title: "Special Ricano",
      description:
        "Experience the Art in Every Cup! Indulge in expertly crafted barista creations",
      link: "#contact",
    },
  ];

  return (
    <div id="service" className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 lg:py-16 ">
      <div
        style={{ fontFamily: "Poppins" }}
        className="w-full max-w-5xl mx-auto py-8 text-white"
      >
    <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >

          <h2
            style={{ fontFamily: "Poppins" }}
            className="text-3xl lg:text-4xl font-bold text-orange-800 mb-2"
          >
            Services
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-10 bg-orange-800/50"></div>
            <h3
              style={{ fontFamily: "Poppins" }}
              className="text-sm sm:text-md uppercase tracking-wider text-orange-800/80"
            >
              What we offer
            </h3>
            <div className="h-[1px] w-10 bg-orange-800/50"></div>
          </div>
          <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base mt-4">
            Experience Kenya's finest coffee services
          </p>
        </motion.div>
  
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      {slide.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={slide.link}
                      className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]"
                    >
                      Learn More
                      <span className="ml-2 text-xl">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
  
}

export default Service;
