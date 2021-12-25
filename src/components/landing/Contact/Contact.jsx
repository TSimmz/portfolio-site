import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ContactSection } from './styles';
import { PageSection } from 'components/common';
import ContactForm from './ContactForm/ContactForm';
import EmailPerson from 'assets/illustrations/email-person.svg';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <PageSection id='contact' as={ContactSection} theme={theme}>
      <div className='content-container'>
        <EmailPerson />
        <h1>Contact Me</h1>
        <ContactForm />
      </div>
    </PageSection>
  );
};
