import React from "react";
import NavbarMobile from "./navbarmobile/NavbarMobile";
import NavbarDesktop from "./navbardesktop/NavbarDesktop";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const Navbar = () => {
  const { width } = useWindowDimensions();
  return width < 960 ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
