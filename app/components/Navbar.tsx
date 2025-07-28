import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="flex gap-1 items-center">
          <img
            src="/logo/resumind-logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <p className="text-2xl font-bold text-gradient">RESUMIND</p>
        </div>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
