import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu toggle
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-2 font-bold text-2xl sm:text-3xl">
            <img src={Logo} alt="Foodie logo" className="w-10" loading="lazy" />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Foodie
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-6">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-2 px-3 hover:text-yellow-500 duration-200"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <DarkMode />
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 duration-200 text-white py-1.5 px-4 rounded-full flex items-center gap-2">
              Order
              <FaCartShopping className="text-lg text-white drop-shadow-sm" />
            </button>

            {/* Mobile menu icon */}
            <div className="sm:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="sm:hidden bg-white dark:bg-gray-800 dark:text-white py-4 px-6 space-y-4 shadow-md">
            {Menu.map((menu) => (
              <a
                key={menu.id}
                href={menu.link}
                className="block hover:text-yellow-500 duration-200"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {menu.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
