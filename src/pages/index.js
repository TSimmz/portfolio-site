import * as React from 'react';
import { Layout, Seo } from 'components/common';
import { Home } from 'components/landing';
import { Header } from 'components/theme';

const timeout = 1000;
// markup
const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <Header timeout={timeout} />
      <Home timeout={timeout} />
    </Layout>
  );
};

export default HomePage;
