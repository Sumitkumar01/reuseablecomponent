import React, { useState } from "react";
import logo from "../../assets/spice.png";

import Nav_Links from "./Navlink";
import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { GoLock } from "react-icons/go";

function NavBar4() {
  const navLink = Nav_Links();

  const [open, close] = useState(false);

  

  return (
    <header className="bg-slate-800 py-6">
      <div className="c_container bg-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center justify-center">
            <img src={logo} alt="logo" />
            <div className="flex items-center justify-center gap-1">
              <span className="uppercase font-bold text-3xl text-[#BA1013]">
                spice
              </span>
              <span className="uppercase font-bold text-3xl text-[#D86B1F]">
                heaven
              </span>
            </div>
          </div>
          <div>
            <nav>
              <ul className="flex justify-center items-center gap-3">
                {navLink.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.src}
                      className="capitalize text-lg hover:text-[#D86B1F] font-medium"
                    >
                      {item.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-4 justify-center items-center ps-2">
            <div onBlur={() => close(false)}>
              {!open ? (
                <button onClick={() => close(true)}>
                  <CiSearch className="text-3xl font-semibold" />
                </button>
              ) : (
                <input
                  
                  
                  type="search"
                  placeholder="Search..."
                  className="text-lg font-normal rounded-2xl px-3 py-1 w-[10rem] border outline-none"
                />
              )}
            </div>
            <div className="relative">
              <GoLock className="text-2xl" />
              <small className="absolute top-4 left-3 flex justify-center items-center rounded-full w-4 h-4 bg-[#D86B1F] text-[.7rem] text-white">
                2
              </small>
            </div>
            <div>
              <span className="capitalize text-lg hover:text-[#D86B1F] font-medium ">
                reservation
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar4;
