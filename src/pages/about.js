import * as React from 'react';
import { Layout, Seo } from 'components/common';
import { Header } from 'components/theme';
import { About } from 'components/landing';

const timeout = 1000;
// markup
const AboutPage = () => {
  return (
    <Layout>
      <Seo />
      <Header timeout={timeout} />
      <About timeout={timeout} />
    </Layout>
  );
};

export default AboutPage;
