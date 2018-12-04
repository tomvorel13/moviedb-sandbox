import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <a href="#!" className="navbar-brand">
        {title}
      </a>
    </nav>
  );
};

export default Navbar;
