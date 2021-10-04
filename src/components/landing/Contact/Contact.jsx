import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ContactWrapper, FormWrapper, ContactDivider } from './styles';
import { Divider, PageTitle } from 'components/common';
import ContactForm from './ContactForm/ContactForm';
import { motion } from 'framer-motion';

export const Contact = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <ContactWrapper id='contact' theme={theme}>
        <PageTitle
          as={motion.h1}
          theme={theme}
          className='center'
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: 'easeIn',
          }}>
          Contact
        </PageTitle>
        <Divider as={ContactDivider} theme={theme} />
        <FormWrapper
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeIn',
          }}>
          <ContactForm />
        </FormWrapper>
      </ContactWrapper>
    </Wrapper>
  );
};
