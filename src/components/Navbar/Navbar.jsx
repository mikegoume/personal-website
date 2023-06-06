import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const burgerButtonClassnames = classNames({
    "block hamburger lg:hidden focus:outline-none": true,
    open: isMenuOpen === true,
  });

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-end">
        <div className="hidden space-x-6 lg:flex">
          <a href="#about" className="hover:text-blue">
            About
          </a>
          <a href="#projects" className="hover:text-blue">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue">
            Contact
          </a>
        </div>
        <button
          id="menu-btn"
          className={burgerButtonClassnames}
          onClick={() => handleButtonClick()}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end height-full py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow"
        >
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
