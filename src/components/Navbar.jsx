import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <img src={appleImg} alt="apple logo" width={20} height={20} />
      <nav className="screen-max-width flex w-full">
        {/* Apple Logo */}

        {/* Navbar Items  */}
        <div className="flex justify-center max-sm:hidden">
          {navLists.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer px-5 text-gray transition-all hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </nav>
      {/* Icons */}
      <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
        <img src={searchImg} alt="search" height={20} width={20} />
        <img src={bagImg} alt="cart" height={20} width={20} />
      </div>
    </header>
  );
};

export default Navbar;
