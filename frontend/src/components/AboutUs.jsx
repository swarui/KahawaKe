import img from '../assets/About.png';

function AboutUs() {
  return (
    <>
    <div  id='about' >
      <div className="mt-10  py-10 px-5">
        {/* Section Title */}
        <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-3xl font-bold text-[#3e2723] mb-2"
        >
          Who are we?
        </h1>
        <h2
          style={{ fontFamily: "Poppins" }}
          className="text-center text-md text-[#3e2723]  mb-6"
        >
          About Us
        </h2>

        <div className="flex lg:flex-row flex-col max-w-6xl mx-auto items-center lg:space-x-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={img}
              className="lg:w-[400px] sm:w-[250px] md:w-[300px] rounded-full shadow-lg"
              alt="Coffee cup"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-3/4 mt-4 lg:mt-0 p-6 lg:p-10 text-center lg:text-left">
            <p
              style={{ fontFamily: 'Poppins' }}
              className="lg:text-[1.0em] sm:text-[0.975em] mt-4 leading-relaxed"
            >
              Kahawa Ke, where coffee and comfort come together in perfect harmony.
              Nestled in the heart of Nairobi, Kenya. We pride ourselves on offering a
              unique experience for coffee lovers and travelers alike. At Kahawa Ke, we
              believe that great coffee isn't just a drink, it's a lifestyle.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUs;
