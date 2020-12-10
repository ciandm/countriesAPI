import React, { useEffect, useState, useRef } from 'react';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';
import Countries from './containers/Countries/Countries';
import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountriesGrid from './components/CountriesGrid/CountriesGrid';
import { useFetchCountries } from './data/useFetchCountries';

function App() {

  // states
  const [theme, setTheme] = useState('light');
  const [searchValue, setSearchValue] = useState('');

  const isComponentMounted = useRef(true);

  const { data: countries, loading, error } = useFetchCountries("/all", isComponentMounted, []);

  const ThemeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleSearch(input) {
    setSearchValue(input);
  }

  return (
    <ThemeProvider theme={{
      name: theme,
      colours: theme === 'light' ? LIGHT : DARK
    }}>
      <GlobalStyle />
      <Header
        handleThemeToggle={ThemeToggler}
      />
      <Countries>
        <CountriesHeader
          handleSearch={handleSearch}
        />
        <CountriesGrid
          countries={countries}
          loading={loading}
          searchValue={searchValue}
        />
        {error}
      </Countries>
    </ThemeProvider>
  );
}

export default App;
