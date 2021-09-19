import * as React from 'react';
import { Layout, Seo } from 'components/common';
import { Header } from 'components/theme';
import { Resume } from 'components/landing';

const timeout = 1000;
// markup
const ResumePage = () => {
  return (
    <Layout>
      <Seo />
      <Header timeout={timeout} />
      <Resume timeout={timeout} />
    </Layout>
  );
};

export default ResumePage;
