import React, { useState, useRef } from 'react';
import GlobalStyle from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from './Themes/Theme';
import Header from './components/Header/Header';
import Countries from './containers/Countries/Countries';
import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountriesGrid from './components/CountriesGrid/CountriesGrid';
import CountryDetailsContainer from './containers/CountryDetails/countryDetailsContainer';
import { useFetchCountries } from './data/useFetchCountries';

function App() {

  // states
  const [theme, setTheme] = useState('light');
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [borderCountries, setBorderCountries] = useState([]);

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

  function handleCountrySelect(country) {
    setSelectedCountry(country);
    const [borders] = [country.borders];
    if (borders.length > 0) {
      const borderCountries = [];
      borders.forEach(border => {
        countries.forEach(country => {
          if (country.alpha3Code === border) {
            borderCountries.push(country.name);
          }
        })
      })
      setBorderCountries(borderCountries);
    }
  }

  function handleCountryDeselect() {
    setSelectedCountry('');
    setBorderCountries([]);
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
          selectedCountry={selectedCountry}
          handleCountryDeselect={handleCountryDeselect}
        />
        {!selectedCountry &&
          <CountriesGrid
            countries={countries}
            loading={loading}
            searchValue={searchValue}
            region={region}
            handleCountrySelect={handleCountrySelect}
          />
        }
        {selectedCountry &&
          <CountryDetailsContainer
            country={selectedCountry}
            borderCountries={borderCountries}
          />
        }
        {error}
      </Countries>
    </ThemeProvider>
  );
}

export default App;
