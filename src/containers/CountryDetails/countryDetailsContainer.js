import React from 'react';
import CountryDetails from '../../components/CountryDetail';
import { ThemeConsumer } from 'styled-components';
import refactorPopulation from '../../utils/refactorPopulation';

function CountryDetailsContainer({
  country,
  borderCountries
}) {
  return (
    <ThemeConsumer>
      {() => {
        return (
          <CountryDetails>
            <CountryDetails.Flag src={country.flag} />
            <CountryDetails.Report>
              <CountryDetails.Title>
                {country.name}
              </CountryDetails.Title>
              <CountryDetails.Columns>
                <CountryDetails.Column>
                  <CountryDetails.Item><span className="bold">Native name: </span>{country.nativeName}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Population: </span>{refactorPopulation(country.population)}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Region: </span>{country.region}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Sub Region: </span>{country.subregion}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Capital: </span>{country.capital}</CountryDetails.Item>
                </CountryDetails.Column>
                <CountryDetails.Column>
                  <CountryDetails.Item><span className="bold">Top Level Domain: </span>{country.topLevelDomain}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Currencies: </span>{formatList(country.currencies)}</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Languages: </span>{formatList(country.languages)}</CountryDetails.Item>
                </CountryDetails.Column>
              </CountryDetails.Columns>
              <CountryDetails.Row>
                <CountryDetails.Item><span className="bold">Border countries: </span></CountryDetails.Item>
                {
                  borderCountries.map(bc => <CountryDetails.Item key={bc}>{bc}</CountryDetails.Item>)
                }
              </CountryDetails.Row>
            </CountryDetails.Report>
          </CountryDetails>
        )
      }}
    </ThemeConsumer>
  )
}

function formatList(items) {
  let result = '';
  for (let i = 0; i < items.length; i++) {
    i === items.length - 1 ? result += items[i].name : result += `${items[i].name}, `;
  }
  return result;
}

export default CountryDetailsContainer
