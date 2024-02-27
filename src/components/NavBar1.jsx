import React from "react";
import Nav_Links from "./Navlink";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LiaTripadvisor } from "react-icons/lia";
import { MobileNav } from "./MobileNav";
import { MdOutlineEmail } from "react-icons/md";

import logo from "../assets/grand-d-europe.png";

function NavBar1() {
  const navLink = Nav_Links();

  const socialLink = [
    { icon: <FaFacebookF class="text-lg font-medium"/>, link: "/" },
    { icon: <CiInstagram class="text-lg font-medium"/>, link: "/" },
    { icon: <LiaTripadvisor class="text-lg font-medium"/>, link: "/" },
    { icon: <FaLinkedinIn class="text-lg font-medium"/>, link: "/" },
  ];

  return (
    <header className="bg-white">
      <div className="c_container">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-[7rem] w-[7rem]" />
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-end gap-3">
              <Link to="" className="flex items-center justify-center gap-2 text-lg font-medium">
                <IoCall />
                +91 123456789
              </Link>
              <Link to="" className="flex items-center justify-center gap-2 text-lg font-medium">
                <MdOutlineEmail />
                abc@gmail.com
              </Link>
              <div>
                <ul className="flex items-center justify-center gap-2">
                  {socialLink.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link} target="_blank" className="text-lg font-medium">
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <nav className="flex items-center justify-center">
              <ul className="flex gap-2">
                {navLink.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.src}
                      className="uppercase text-lg font-medium"
                    >
                      {item.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to=""
                className="uppercase text-lg font-medium flex justify-center items-center py-1 px-5 rounded-3xl bg-[#288173] text-white"
              >
                book now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar1;
