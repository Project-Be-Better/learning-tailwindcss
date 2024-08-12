import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full justify-between">
        {/* Apple Logo */}
        <img src={appleImg} alt="apple logo" width={14} height={18} />

        {/* Navbar Items  */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer px-5 text-gray transition-all hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" height={20} width={20} />
          <img src={bagImg} alt="cart" height={20} width={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
