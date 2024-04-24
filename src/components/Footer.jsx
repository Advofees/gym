import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#3E3310] p-4 text-white">
      <div className="container mx-auto">
        <div className="my-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img src={logo} className="h-24 inline-block items-center" />
            </a>
            <p className="md:w-1/2">
              With tailored workout plans, an extensive exercise library, and
              personalized coaching, we empower you to achieve your fitness
              goals with confidence.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-6 mt-5">
              <h4>Platform</h4>
              <ul className="space-y-3">
                <a href="/" className="block hover:text-gray-300">
                  Features
                </a>
                <a href="/" className="block hover:text-gray-300">
                  About
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4>Help</h4>
              <ul className="space-y-3">
                <a href="/" className="block hover:text-gray-300">
                  How does it work?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  where to ask question?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  How to play?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  what is needed for this?
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4>Contacts</h4>
              <ul className="space-y-3">
                <p href="/" className=" hover:text-gray-300">
                  info@example.com
                </p>
                <p href="/" className=" hover:text-gray-300">
                  Address
                </p>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-8 sm:items-center justify-between my-8">
          <p>@ FitFlex 2024 All rights reserved</p>

          <div className="flex">
            <span>
              <FaFacebookF className="w-8 cursor-pointer hover:-translate-y-4 duration-500" />
            </span>
            <span>
              <FaInstagram className="w-8 cursor-pointer  hover:-translate-y-4 duration-500" />
            </span>
            <span>
              <FaXTwitter className="w-8 cursor-pointer  hover:-translate-y-4 duration-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
