import React from 'react'
import CountriesCard from '../CountriesCard/CountriesCard';
import * as S from './CountriesGrid.styled';

function CountriesGrid({
  countries,
  loading,
  searchValue,
  region
}) {

  if (searchValue) {
    if (searchValue === '') return;
    searchValue = searchValue.toLowerCase()

    countries = countries.filter(filterCountry);

    function filterCountry(country) {
      if (country.name.toLowerCase().includes(searchValue)) {
        return true;
      }

      let countryIsIncluded = false;
      country.altSpellings.forEach(sp => {
        if (sp.toLowerCase().includes(searchValue)) {
          return countryIsIncluded = true;
        }
      })
      if (countryIsIncluded) {
        return true;
      }
    }
  }

  if (region) {
    countries = countries.filter(filterByRegion);

    function filterByRegion(country) {
      if (country.region === region) {
        return true;
      }
    }
  }

  return (
    <S.CountriesGrid>
      { countries && countries.map(country => (
        <CountriesCard
          key={country.name}
          image={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </S.CountriesGrid>
  )
}

export default CountriesGrid
