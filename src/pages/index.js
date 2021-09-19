import * as React from 'react';
import { Home } from 'components/landing';

const timeout = 1000;
// markup
const HomePage = () => {
  return <Home timeout={timeout} />;
};

export default HomePage;
