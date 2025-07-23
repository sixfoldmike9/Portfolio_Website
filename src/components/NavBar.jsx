import { useState, useEffect, useCallback } from "react";
// import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="inner">
        <a href="#hero" className="logo" aria-label="Home">
          Aadarsh Kohade
        </a>

        {/* <nav className="desktop" aria-label="Main navigation">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} className="relative">
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        <a
          href="#contact"
          className="contact-btn group"
          aria-label="Jump to contact section"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

