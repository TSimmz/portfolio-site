import React, { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import { Wrapper } from "./styles";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper active={sidebar} onClick={toggle} theme={theme}>
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
