import React from "react";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://github.com/saurabhparyani/tonic",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://www.linkedin.com/in/saurabhparyani/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://www.saurabhparyani.dev/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  }
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img className="h-20 w-60" src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor ml-9">Copyright © {currentYear} Tonic. Developed by Saurabh Paryani. All rights reserved.</p>

            <div className="flex items-center gap-3 mt-4 ml-9">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  target="_blank"
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor ">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor ">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support Us</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor ">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;