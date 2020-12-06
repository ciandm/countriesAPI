import React, { useState, useEffect } from 'react';
import getCountries from './data/getCountries';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';
import Countries from './containers/Countries/Countries';
import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountriesGrid from './components/CountriesGrid/CountriesGrid';
import getSearchResult from './data/getSearchResult';

function App() {

  // states
  const [theme, setTheme] = useState('light');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries()
      .then(res => {
        if (res.error) {
          setError(res.error);
        } else {
          setCountries(res.results);
          setLoading(false);
        }
      })
  }, [])

  const ThemeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleSearch(input) {
    setLoading(true);

    getSearchResult(input)
      .then(res => {
        setCountries(res.results.map(r => r));
        setError(null);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setCountries([]);
        setLoading(false);
      })
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
        />
        {error}
      </Countries>
    </ThemeProvider>
  );
}

export default App;
