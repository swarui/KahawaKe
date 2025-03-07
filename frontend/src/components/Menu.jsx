import React from "react";
import Americano from "../assets/Americano.jpeg";
import Cappuccino from "../assets/Capucino.jpeg";
import Corado from "../assets/Corado.jpeg";
import Iced from "../assets/Iced.jpeg";
import Latte from "../assets/Latte.jpeg";
import Brew from "../assets/Brew.jpeg";
import Ricano from "../assets/Ricano.png";
import Mocha2 from "../assets/Mocha2.png";
import Mocha4 from "../assets/Mocha4.png";



function MenuItem({ title, description, price, image }) {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex items-center justify-between p-4 bg-orange-900 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-20 sm:h-20 border border-black rounded-full object-cover"
        />
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
        </div>
      </div>
      <div className="text-white font-bold text-sm sm:text-base">{price}</div>
    </div>
  );
}

function Menu() {
  return (
    <div id="menu" className="min-h-screen bg-[#f8f5f3] p-6 sm:p-8">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="text-center text-3xl font-bold text-[#3e2723] mt-6"
      >
        Menu
      </h1>
      <h2
        style={{ fontFamily: "Poppins" }}
        className="text-center text-md text-[#804933] mt-2"
      >
        Best Selling
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8">
        <MenuItem
          title="Breve Coffee"
          description="A blend of Arabica coffee beans."
          price="Ksh 200"
          image={Mocha2}
          loading="lazy"

        />
        <MenuItem
          title="Ice Cold"
          description="A refreshing cold coffee."
          price="Ksh 250"
          image={Iced}
          loading="lazy"

        />
        <MenuItem
          title="Mocha Brew"
          description="A strong and rich espresso brew."
          price="Ksh 300"
          image={Brew}
          loading="lazy"

        />
        <MenuItem
          title="Latte"
          description="A robust, aromatic escape in every cup."
          price="Ksh 350"
          image={Latte}
          loading="lazy"

        />
        <MenuItem
          title="Americano"
          description="A harmonious blend for a perfect brew."
          price="Ksh 400"
          image={Americano}
          loading="lazy"

        />
        <MenuItem
          title="Corado"
          description="Pure coffee bliss, brewed just for you."
          price="Ksh 450"
          image={Corado}
          loading="lazy"
        />
        <MenuItem
          title="Capuccino"
          description="Expertly roasted for a full-bodied taste."
          price="Ksh 400"
          image={Mocha4}
          loading="lazy"

        />
        <MenuItem
          title="Americano"
          description="A symphony of flavor ."
          price="Ksh 400"
          image={Ricano}
          loading="lazy"

        />
      </div>
    </div>
  );
}

export default Menu;
