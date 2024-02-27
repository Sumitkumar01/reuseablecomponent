import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav_Links from "./Navlink";

export const MobileNav = ({ props, Engine, menuOpen, setMenuOpen }) => {
  const Nav_Links_Arr = Nav_Links();
  return (
    <div
      className="mobile-nav fixed top-0 right-0 w-[320px] h-[100vh] bg-gray-300 z-[999] px-8 py-4"
      style={{
        right: menuOpen ? "0" : "-100%",
        transition: "all 0.5s",
      }}
    >
      <p
        className="text-end text-[2rem] font-extrabold"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        X
      </p>
      <ul className="flex flex-col gap-8">
        {Nav_Links_Arr.map((links, i) => {
          return (
            <li
              key={i}
              className="text-[1.6rem] font-medium text-[#343434] uppercase"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <NavLink to={links.src}>{links.linkName}</NavLink>
            </li>
          );
        })}
        <li>
          <Link
            to={Engine}
            target="_blank"
            className="common-btn"
          >
            Book Now
          </Link>
        </li>
      </ul>
    </div>
  );
};
