import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

import logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Courses",
    link: "/#services",
  },
  {
    id: 3,
    name: "News & Updates",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Previous Year Papers",
    link: "/#",
  },
  {
    id: 2,
    name: "Current Affairs",
    link: "/#",
  },
  {
    id: 3,
    name: "Books",
    link: "/#",
  },
];

const NavbarSection = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-orange-400 dark:bg-orange-950 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-orange-700 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <img src={logo} alt=""
                className="w-[50px] h-[50px]"
              />
              {/* <logo size="30" /> */}
              {/* ShopMe */}
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-yellow-200 py-1 px-2
                  text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-orange-100 "
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Register button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Register Now
              </span>
              <MdAppRegistration className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-lime-50 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Academics
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSection;
