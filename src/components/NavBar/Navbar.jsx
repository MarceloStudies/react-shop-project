import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdonwLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#services",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#faq",
  },
];
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semilbold tracking-wider text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className="hidden  lg:block">
              <ul className="flex items-center">
                {MenuLinks.map((link) => (
                  <li key={link.id} className="ml-6">
                    <a
                      href={link.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black 
                      dark:text-white duration-200 "
                    >
                      {" "}
                      {link.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group ml-4">
                  <a
                    href="#"
                    className=" flex items-center gap-[2px] font-semibold 
                  text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] 
                  rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white ">
                    <ul className="space-y-2">
                      {DropdonwLinks.map((data,index) => (
                        <li>
                          <a
                          className="text-gray-500  dark:hover:text-white 
                          duration-200 p-2 w-full hover:bg-primary/20 inline-block 
                          rounded-md font-semibold " 
                          href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar " />
              <IoMdSearch
                className="text-xl text-gray-600 dark:text-gray-400 absolute 
              top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200"
              />
            </div>

            {/* Order-button section  */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 duration-200" />
              <div
                className="w-4 h-4 bg-red-500 text-white rounded-full absolute
              top-0 right-0 flex items-center justify-center text-xs"
              >
                4
              </div>
            </button>

            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
