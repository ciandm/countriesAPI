import React from 'react'
import PropTypes from 'prop-types';
import * as S from './CountriesCard.styled';
import refactorPopulation from '../../utils/refactorPopulation';

function CountriesCard({
  image,
  name,
  population,
  region,
  capital,
  country,
  handleCountrySelect
}) {

  return (

    <S.CountriesCard onClick={() => handleCountrySelect(country)}>
      <img src={image} alt={`${name} flag`} />
      <div>
        <h2>{name}</h2>
        <ul>
          <li><span>Population: </span>{refactorPopulation(population)}</li>
          <li><span>Region: </span>{region}</li>
          <li><span>Capital: </span>{capital}</li>
        </ul>
      </div>
    </S.CountriesCard>
  )
}

CountriesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
}

export default CountriesCard
