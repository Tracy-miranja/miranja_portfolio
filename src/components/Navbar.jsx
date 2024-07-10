import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./style";
import { navLinks } from "../constants";
import { logo } from "../assets";
import "./app.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="font-bold cursor-pointer">
            Tracy <span className="text-red-500">Miranja</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative ${
                active === link.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="relative">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
