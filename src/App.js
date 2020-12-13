import React, { useState, useRef } from 'react';
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
  const [region, setRegion] = useState('');

  const isComponentMounted = useRef(true);

  const { data: countries, loading, error } = useFetchCountries("/all", isComponentMounted, []);

  const ThemeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleSearch(input) {
    setSearchValue(input);
  }

  function handleSearchReset() {
    setSearchValue('');
  }

  function handleRegionSelect(region) {
    setRegion(region);
  }

  function handleRegionReset() {
    setRegion('');
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
          handleSearchReset={handleSearchReset}
          handleRegionSelect={handleRegionSelect}
          region={region}
          handleRegionReset={handleRegionReset}
        />
        <CountriesGrid
          countries={countries}
          loading={loading}
          searchValue={searchValue}
          region={region}
        />
        {error}
      </Countries>
    </ThemeProvider>
  );
}

export default App;
