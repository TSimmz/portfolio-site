import React, { useContext, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Hamburger from './Hamburger/Hamburger';
import Sidebar from './Sidebar/Sidebar';
import { Wrapper, Overlay } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

export const Header = ({ timeout }) => {
  const [sidebar, toggle] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar timeout={timeout} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
