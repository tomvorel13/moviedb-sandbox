import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <a href="#!" className="brand">
        {title}
      </a>
    </nav>
  );
};

export default Navbar;
