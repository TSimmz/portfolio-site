import React from 'react';
import { Layout } from 'components/common';
import ThemeProvider from 'providers/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
