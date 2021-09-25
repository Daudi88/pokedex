import React, { useEffect, useState } from "react";
import Hamburger from "../../hamburger/Hamburger";
import MenuMobile from "../../menumobile/MenuMobile";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <div
      className="navbar-mobile-container"
      style={{ height: open ? "100vh" : "3.6em" }}
    >
      <div className="navbar-mobile">
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <MenuMobile open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavbarMobile;
