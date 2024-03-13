import React, { useRef, useState } from "react";
import logo from "../../assets/spice.png";
import { MobileNav } from "./MobileNav";
import { BiMenuAltRight } from "react-icons/bi";
import Nav_Links from "./Navlink";
import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { GoLock } from "react-icons/go";

function NavBar4() {
  const navLink = Nav_Links();
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, close] = useState(false);

  const inputRef = useRef();

  return (
    <header className="bg-indigo-700 py-3">
      <div className="c_container bg-white">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2 items-center justify-center">
            <img src={logo} alt="logo" />
            <div className="lg:flex items-center justify-center gap-1">
              <span className="uppercase font-bold block lg:text-3xl text-lg text-[#BA1013]">
                spice
              </span>
              <span className="uppercase font-bold block lg:text-3xl text-lg text-[#D86B1F]">
                heaven
              </span>
            </div>
          </div>
          <div className="lg:block hidden">
            <nav>
              <ul className="flex justify-center items-center gap-3">
                {navLink.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.src}
                      className="capitalize text-lg duration-300 hover:text-[#D86B1F] font-medium"
                    >
                      {item.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-4 justify-center items-center ps-2  ">
            <div className={`flex items-center px-1 rounded-3xl justify-center py-1 ${open ? "border" : ""}`}>
              <input
                id="search"
                onBlur={() => close(false)}
                ref={inputRef}
                type="text"
                autoComplete="off"
                placeholder="Search..."
                className={`text-base font-normal rounded-2xl px-3 py-1   outline-none ${
                  open ? "w-[10rem] duration-300" : "w-0"
                }`}
              />
              <button
                onClick={() => {
                  close(!open);
                  inputRef.current.focus();
                }}
                className=""
              >
                <span className="sr-only">search</span>

                <CiSearch className="text-2xl mt-1 font-semibold" />
              </button>
            </div>
            <div className="relative">
              <GoLock className="text-2xl" />
              <small className="absolute top-4 left-3 flex justify-center items-center rounded-full w-4 h-4 bg-[#D86B1F] text-[.7rem] text-white">
                2
              </small>
            </div>
            <div className="lg:block hidden">
              <span className="capitalize text-lg duration-300 hover:text-[#D86B1F] font-medium ">
                reservation
              </span>
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <BiMenuAltRight className="block lg:hidden text-2xl" />
          </button>
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default NavBar4;