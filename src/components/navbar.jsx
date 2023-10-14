import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../App.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-slate-100 fixed w-full flex justify-between items-center p-3 border-b mb-3 z-10">
        <div className="pl-3">
          <Link to={'/'} className="font-extrabold text-xl text-red-500 dancing">Amara Store</Link>
        </div>
        <div className="pr-3 cursor-pointer">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-red-500 text-lg" onClick={toggleMenu} />
        </div>
      </nav>
      {isOpen && <HamburgerMenu />}
    </>
  );
};

export default Navbar;
