import React from "react";
import Nav_Links from "./Navlink";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LiaTripadvisor } from "react-icons/lia";
import { MobileNav } from "./MobileNav";
import { MdOutlineEmail } from "react-icons/md";

import logo from "../../assets/grand-d-europe.png";

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
        <div className="flex justify-between pt-3">
          <div className="p-2">
            <Link to="/">
              <img src={logo} alt="logo" className="h-[6.5rem] w-[9rem]" />
            </Link>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-end gap-3 py-3 border-b border-[#288173]">
              <Link to="tel:91123456789" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[#288173]">
                <IoCall />
                +91 123456789
              </Link>
              <Link to="mailto:abc@gmail.com" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[#288173]">
                <MdOutlineEmail />
                abc@gmail.com
              </Link>
              <div>
                <ul className="flex items-center justify-center gap-2">
                  {socialLink.map((item, i) => (
                    <li key={i} className="w-[35px] h-[35px] border rounded-full border-[#288173]  flex items-center justify-center hover:bg-[#288173] hover:text-white ">
                      <Link to={item.link} target="_blank" className="text-lg font-medium  ">
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <nav className="flex items-center justify-end py-3 gap-3">
              <ul className="flex gap-2">
                {navLink.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.src}
                      className="uppercase text-lg font-medium hover:bg-[#288173] hover:rounded-3xl hover:text-white px-3 py-1 flex items-center justify-center"
                    >
                      {item.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link
                to=""
                className="uppercase text-lg font-medium flex justify-center items-center py-1 px-5 rounded-3xl bg-[#288173] text-white hover:bg-slate-50 hover:text-[#288173] border border-[#288173]"
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
