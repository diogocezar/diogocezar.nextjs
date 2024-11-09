import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiFileText,
  FiHome,
  FiBookOpen,
  FiGrid,
  FiMail,
} from "react-icons/fi";

import { Home, UserCircle, List2, Box, Mailbox } from "solar-icon-set";

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <div className="nav-link">
            <span className="link-text logo-text">Menu</span>
            <FiArrowRight size={30} />
          </div>
        </li>
        <li className="nav-item">
          <Link href="/" className="nav-link">
            <Home size={30} />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            <UserCircle size={30} />
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/portfolio" className="nav-link">
            <List2 size={30} />
            <span className="link-text">Portfólio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/educational" className="nav-link">
            <Box size={30} className="w-10" />
            <span className="link-text">Educational</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            <Mailbox size={30} />
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
