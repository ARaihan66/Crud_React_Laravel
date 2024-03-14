import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-5 m-10 p-5 bg-sky-800 font-bold text-xl uppercase rounded-md">
        <li>
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className="hover:text-white">
            Create Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
