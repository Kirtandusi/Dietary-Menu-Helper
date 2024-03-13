import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-back text-white w-full h-20 flex flex-col items-center justify-center fixed top-0 left-0">
      <div className="flex justify-between items-center w-[92vw] ">
        <NavLink
          to="/"
          className="text-2xl font-bold p-4 text-white hover:text-gray-300"
        >
          Home
        </NavLink>
        <nav className="flex">
          <NavLink
            to="/meal-plan-page"
            className="text-2xl font-bold p-4 text-white hover:text-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/meal-plan-page"
            className="text-2xl font-bold p-4 text-white hover:text-gray-300"
          >
            User
          </NavLink>
        </nav>
      </div>
      <hr className="w-4/5 h-[.25rem] bg-back-dark text-bg-back-dark" />
    </header>
  );
};

export default Navbar;
