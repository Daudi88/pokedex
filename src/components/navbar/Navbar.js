import React from "react";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "./navbarmobile/NavbarMobile";
import NavbarDesktop from "./navbardesktop/NavbarDesktop";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 959px)" });
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
