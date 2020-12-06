import React from 'react'
import CountriesCard from '../CountriesCard/CountriesCard';
import * as S from './CountriesGrid.styled';

function CountriesGrid({ countries, loading }) {
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
