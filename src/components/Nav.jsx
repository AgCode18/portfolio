import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex items-center justify-between px-6 py-4 w-full fixed top-0 z-50 shadow-md">
      <h1 className="text-white text-xl sm:text-2xl font-bold">My Portfolio</h1>

      <button
        className="bg-white rounded-full px-4 py-1 text-black font-bold cursor-pointer md:hidden"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white font-semibold text-lg">
        <a href="#home"><li className="hover:text-gray-400 cursor-pointer">Home</li></a>
        <a href="#skills"><li className="hover:text-gray-400 cursor-pointer">Skills</li></a>
        <a href="#projects"><li className="hover:text-gray-400 cursor-pointer">Projects</li></a>
        <a href="#contact"><li className="hover:text-gray-400 cursor-pointer">Contact</li></a>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#5c5757] text-black p-6 pt-16 z-50 shadow-lg rounded-l-2xl backdrop-blur-sm"
          >
            <button
              className="absolute top-4 right-4 bg-black text-white font-bold rounded-full px-4 py-1"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>

            <ul className="mt-10 space-y-6 text-lg font-semibold">
              <a href="#home" onClick={() => setIsOpen(false)}>
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
              </a>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                <li className="hover:text-gray-300 cursor-pointer">Skills</li>
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                <li className="hover:text-gray-300 cursor-pointer">Projects</li>
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <li className="hover:text-gray-300 cursor-pointer">Contact</li>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
