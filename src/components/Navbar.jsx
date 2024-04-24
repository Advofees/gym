import { useState } from "react";
import logo from "../assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Features", path: "feature" },
    { link: "About", path: "about" },
  ];

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary ">
        <div className="text-xl container mx-auto flex justify-between">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className=" text-2xl font-semibold flex items-center space-x-3 h-24"
            >
              <img src={logo} alt="logo" className="h-full" />
            </a>
            <div
              className="md:flex space-x-12 hidden"
            >
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block hover:text-gray-500 cursor-pointer duration-300"
                >
                  {link}
                </Link>
              ))}
              <NavLink
                className="block hover:text-gray-500 cursor-pointer duration-300"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-[#634e0b] lg:hidden md:hidden ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300 ml-4"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            className="block hover:text-gray-400 duration-500 text-white px-4 py-2 border-b border-gray-500"
          >
            {link}
          </Link>
        ))}
        <NavLink
          className="block hover:text-gray-400 duration-500 text-white px-4 py-2 border-b border-gray-500"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
