import React from "react";

import Nav_Links from "./Navlink";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { LiaTripadvisor } from "react-icons/lia";
import { MobileNav } from "./MobileNav";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/al-hathaifa.jpg";

import call from "../../assets/call.svg";

function NavBar3() {
  const navLink = Nav_Links();

  const socialLink = [
    { icon: <FaFacebookF class="text-lg font-medium" />, link: "/" },
    { icon: <CiInstagram class="text-lg font-medium" />, link: "/" },
    { icon: <LiaTripadvisor class="text-lg font-medium" />, link: "/" },
    { icon: <FaLinkedinIn class="text-lg font-medium" />, link: "/" },
  ];

  return (
    <header className="bg-[#202020]">
      <div className="lg:max-w-[1600px] mx-auto px-2">
        <div className="flex justify-between items-center relative py-3">
          {/* nav left */}
          <div className="">
              <div className="absolute top-0 left-0">
                <img src={logo} alt="logo" className="w-[90px] h-[90px]" />
              </div>
            
          </div>
          <div>
              <ul className="flex items-center justify-center gap-3">
                {socialLink.map((item, i) => (
                  <li
                    key={i}
                    className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
                  >
                    <Link to={item.link} target="_blank">
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          {/* nav-middle */}
          <div className="flex justify-center items-center gap-4">
            <nav>
              <ul className="flex items-center justify-center gap-3">
                {navLink.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.src}
                      className="flex items-center justify-center  uppercase px-2 py-2 text-lg font-medium text-white  hover:text-[#A52323]"
                    >
                      {item.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* nav-rigiht */}
          <div>
            <Link className="flex items-center justify-center gap-2   bg-[#A52323] text-white hover:bg-red-400 border border-[#A52323] py-2 px-5 capitalize">
              <img src={call} alt="icon" className="hover:fill-[#A52323]" />
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar3;
