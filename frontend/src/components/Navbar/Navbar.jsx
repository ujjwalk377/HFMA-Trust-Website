import React, { useEffect, useState } from "react";
import logo from "../../assets/newlogo.png";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`container ${sticky || location.pathname !== "/" ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
  <li>
    <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTo("hero"); setMobileMenu(false); }}>
      Home
    </a>
  </li>
  <li>
    <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo("about"); setMobileMenu(false); }}>
      About Us
    </a>
  </li>
  <li>
    <a href="#gallery" onClick={(e) => { e.preventDefault(); handleScrollTo("gallery"); setMobileMenu(false); }}>
      Gallery
    </a>
  </li>
  <li>
    <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo("services"); setMobileMenu(false); }}>
      Services
    </a>
  </li>
  <li>
    <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); setMobileMenu(false);}}>
      Contact Us
    </a>
  </li>
  <li><Link to="/volunteer" onClick={(e)=>{setMobileMenu(false);}}>Login</Link></li>
  <li><Link to="/volunteer" onClick={(e)=>{setMobileMenu(false);}}>Become a Volunteer</Link></li>
  <li>
    <Link to="/donate">
      <button className="btn" onClick={(e)=>{setMobileMenu(false);}}>Donate</button>
    </Link>
  </li>
</ul>

      <img src={menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
