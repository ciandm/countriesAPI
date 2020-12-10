import React from 'react'
import CountriesCard from '../CountriesCard/CountriesCard';
import * as S from './CountriesGrid.styled';

function CountriesGrid({
  countries,
  loading,
  searchValue
}) {

  if (searchValue) {
    console.log('filtering');
    searchValue = searchValue.toLowerCase()

    countries = countries.filter(filterCountry);

    function filterCountry(country) {
      if (country.name.toLowerCase().includes(searchValue)) {
        return true;
      }

      country.altSpellings.forEach(sp => {
        if (sp.toLowerCase().includes(searchValue)) {
          return true;
        }
      })
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
