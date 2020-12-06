import React, { useState } from 'react';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{
        name: theme,
        theme: theme === 'light' ? LIGHT : DARK
      }}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
