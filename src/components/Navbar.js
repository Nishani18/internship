import React, { useState } from "react";
import "../Styles/navbar.scss";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img className="logo" src={logo} alt="logo"></img>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="list" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="list" href="/Courses">
              COURSES
            </a>
          </li>
          <li>
            <a className="list" href="/Blog">
              BLOG
            </a>
          </li>
          <li>
            <a className="list" href="/Materials">
              MATERIALS
            </a>
          </li>
          <li>
            <a className="list" href="/Teams">
              TEAMS
            </a>
          </li>
          <li>
            <a className="list" href="/Tss">
              TSS
            </a>
          </li>
          <li>
            <a className="list" href="/ContactUs">
              CONTACT US
            </a>
          </li>
          <li>
            <a className="Signup" href="/Signup">
              SIGNUP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
