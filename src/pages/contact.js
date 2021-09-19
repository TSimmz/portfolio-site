import * as React from 'react';
import { Layout, Seo } from 'components/common';
import { Header } from 'components/theme';
import { Contact } from 'components/landing';

const timeout = 1000;
// markup
const ContactPage = () => {
  return (
    <Layout>
      <Seo />
      <Header timeout={timeout} />
      <Contact timeout={timeout} />
    </Layout>
  );
};

export default ContactPage;
