
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-portfolio-text text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          Designed & Built by Mailarappa Budihal
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
