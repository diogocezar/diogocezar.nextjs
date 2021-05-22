import Link from "next/link";
import {
  FiArrowRight,
  FiFileText,
  FiHome,
  FiEdit,
  FiBookOpen,
  FiGrid,
  FiMail,
} from "react-icons/fi";

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Menu</span>
            <FiArrowRight size={30} />
          </a>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
              <FiHome size={30} />
              <span className="link-text">Home</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">
              <FiFileText size={30} />
              <span className="link-text">About</span>
            </a>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link href="/blog/page/1">
            <a className="nav-link">
              <FiEdit size={30} />
              <span className="link-text">Blog</span>
            </a>
          </Link>
        </li> */}
        <li className="nav-item">
          <Link href="/portfolio">
            <a className="nav-link">
              <FiGrid size={30} />
              <span className="link-text">Portfólio</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/educational">
            <a className="nav-link">
              <FiBookOpen size={30} />
              <span className="link-text">Educational</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">
              <FiMail size={30} />
              <span className="link-text">Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
