import React from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FaFacebookMessenger, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "About Us",
    link: "/#",
  },
  {
    title: "Contact Us",
    link: "/#",
  },
  {
    title: "Privacy Policy",
    link: "/#",
  },
  {
    title: "Terms & Conditions",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* companu details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold
                    trancking-widet text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              distFd excepturi omnis!
            </p>
            <p className="text-gray-500 mt-4">
              Made with ❤️ by Marcelo Gonçalves
            </p>
            <a
              href="#"
              className="text-white inline-block bg-primary/90 py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our Youtube
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Footer Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Addres */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+55 12 996630387</p>
                </div>

                {/* Social Links  */}
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary duration-300"
                  >
                  <FaFacebookMessenger/>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary duration-300"
                  >
                    <FaTwitter/>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary duration-300"
                  >
                    <FaInstagram/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
