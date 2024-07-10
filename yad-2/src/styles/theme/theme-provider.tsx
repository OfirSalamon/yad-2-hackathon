import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-style';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
