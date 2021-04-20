import React from "react";
import { BiHome, BiCode, BiEnvelope } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const TheNavigation = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active navlink" exact>
        <BiHome className="icon" />
         Home
      </NavLink>

      <NavLink to="/projects" activeClassName="active navlink">
        <BiCode className="icon" />
         Projects
      </NavLink>

      <NavLink to="/contact" activeClassName="active navlink">
        <BiEnvelope className="icon" />
         Contact
      </NavLink>
    </nav>
  );
};

export default TheNavigation;
