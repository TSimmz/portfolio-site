import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ContactWrapper, FormWrapper, ContactDivider } from './styles';
import { Divider, PageTitle } from 'components/common';
import { Fade } from '@material-ui/core';
import ContactForm from './ContactForm/ContactForm';

export const Contact = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <ContactWrapper id='contact' theme={theme}>
          <PageTitle theme={theme} className='center'>
            Contact
          </PageTitle>
          <Divider as={ContactDivider} theme={theme} />
          <FormWrapper>
            <ContactForm />
          </FormWrapper>
        </ContactWrapper>
      </Wrapper>
    </Fade>
  );
};
