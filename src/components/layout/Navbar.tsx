
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-portfolio-primary/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-portfolio-primary font-bold text-3xl">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer relative group">
            <span className="relative z-10">MB</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="text-portfolio-text">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="nav-link cursor-pointer font-medium relative group"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-portfolio-primary/20">
            <a href="https://drive.google.com/file/d/1ObiebOMwZ-n6Zp1nxJsB4roK1PO5IxQD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" /> Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-portfolio-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full md:hidden bg-portfolio-dark z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
            <ul className="flex flex-col space-y-6 items-center">
              {menuItems.map((item, index) => (
                <li key={index} className="text-portfolio-text text-2xl hover:text-portfolio-primary">
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={toggleMenu}
                    className="nav-link cursor-pointer font-medium hover:text-portfolio-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Mailarappa-Budihal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text hover:text-portfolio-primary p-2"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/mailarappa-budihal-795291194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text hover:text-portfolio-primary p-2"
              >
                <Linkedin />
              </a>
              <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
                <a href="https://drive.google.com/file/d/1ObiebOMwZ-n6Zp1nxJsB4roK1PO5IxQD/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" /> Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
