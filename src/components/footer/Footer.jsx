import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/grand-d-europe.png";

function Footer() {
  const pageLink = [
    { linkName: "privacy policy", src: "/" },
    { linkName: "terms & conditions", src: "/" },
    { linkName: "Cancellation & Refund Policy", src: "/" },
    { linkName: "FAQ", src: "/" },
  ];
  
  return (
    <footer>
      <div className="lg:grid grid-cols-2 c_container">
        <div></div>
        <div></div>
      </div>
      <div className="c_container">
      <div className="lg:grid lg:grid-cols-4 py-3 gap-4">
        <div>
          <div className="w-[12rem] py-2">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className="text-lg text-justify py-2">At our Hotel you will feel great to stay and have a good fun</p>
          </div>
        </div>
        <div>
          <div>
            <h2>OUR FEATURES</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>EXPLORE</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>GET IN TOUCH</h2>
          </div>
        </div>
      </div>
      </div>
      {/* bottom */}
      <div className="bg-gray-950">
        <div className="lg:grid grid-cols-2 c_container py-3">
          <div>
            <p className="text-base font-medium capitalize text-white">
              &copy; copyright eazotel all right reserved
            </p>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-2">
              {pageLink.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.src}
                    className="text-base text-white font-medium capitalize"
                  >
                    {item.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
