import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/about"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
           My Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hobby"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Hobby
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-started"
            className={` ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Manish Kr. Meena
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
