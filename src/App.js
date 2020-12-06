import React, { useState } from 'react';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';

function App() {

  const [theme, setTheme] = useState('light');

  const ThemeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeProvider theme={{
        name: theme,
        colours: theme === 'light' ? LIGHT : DARK
      }}>
        <GlobalStyle />
        <Header
          handleThemeToggle={ThemeToggler}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
