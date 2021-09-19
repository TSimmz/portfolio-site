import * as React from 'react';
import { Contact } from 'components/landing';

const timeout = 1000;
// markup
const ContactPage = () => {
  return <Contact timeout={timeout} />;
};

export default ContactPage;
