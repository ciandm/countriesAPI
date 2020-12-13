import React from 'react';
import CountryDetails from '../../components/CountryDetail';
import { ThemeConsumer } from 'styled-components';

function CountryDetailsContainer({ country }) {
  return (
    <ThemeConsumer>
      {() => {
        return (
          <CountryDetails>
            <CountryDetails.Flag url={country.flag} />
            <CountryDetails.Report>
              <CountryDetails.Title
                title="title"
              />
              <CountryDetails.Columns>
                <CountryDetails.Column>
                  <CountryDetails.Item><span className="bold">Native name: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Population: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Region: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Sub Region: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Capital: </span>value</CountryDetails.Item>
                </CountryDetails.Column>
                <CountryDetails.Column>
                  <CountryDetails.Item><span className="bold">Top Level Domain: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Currencies: </span>value</CountryDetails.Item>
                  <CountryDetails.Item><span className="bold">Languages: </span>value</CountryDetails.Item>
                </CountryDetails.Column>
              </CountryDetails.Columns>
              <CountryDetails.Row>
                <CountryDetails.Item><span className="bold">Border countries: </span></CountryDetails.Item>
                <CountryDetails.Item>France</CountryDetails.Item>
                <CountryDetails.Item>France</CountryDetails.Item>
                <CountryDetails.Item>France</CountryDetails.Item>
              </CountryDetails.Row>
            </CountryDetails.Report>
          </CountryDetails>
        )
      }}
    </ThemeConsumer>
  )
}

export default CountryDetailsContainer
