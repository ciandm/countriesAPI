import React, { useState, useRef } from 'react';
import getCountries from './data/getCountries';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';
import Countries from './containers/Countries/Countries';
import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountriesGrid from './components/CountriesGrid/CountriesGrid';
import getSearchResult from './data/getSearchResult';
import { useFetchCountries } from './data/useFetchCountries';

function App() {

  // states
  const [theme, setTheme] = useState('light');
  const [searching, setSearching] = useState({
    isSearching: false,
    searchValue: ''
  });

  const isComponentMounted = useRef(true);

  const { data: countries, loading, error } = useFetchCountries("/all", isComponentMounted, []);

  const ThemeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleSearch(input) {
    setSearching(prevSearch => ({
      isSearching: true,
      searchValue: input
    }))
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
          searching={searching}
        />
        {error}
      </Countries>
    </ThemeProvider>
  );
}

export default App;
