import React, { useState } from "react";
import Hamburger from "../../hamburger/Hamburger";
import MobileMenu from "../../mobilemenu/MobileMenu";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="navbar-mobile-container"
      style={{ height: open ? "100vh" : "3.6em" }}
    >
      <div className="navbar-mobile">
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavbarMobile;
