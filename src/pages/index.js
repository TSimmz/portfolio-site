import * as React from 'react';
import { Hero, About, Contact } from 'components/landing';

const timeout = 1000;
// markup
const HomePage = () => {
  return (
    <>
      <Hero timeout={timeout} />
      <About timeout={timeout} />
      <Contact timeout={timeout} />
    </>
  );
};

export default HomePage;
