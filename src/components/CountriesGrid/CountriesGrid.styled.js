import styled from 'styled-components';

export const CountriesGrid = styled.div`
  display: grid;
  gap: 72px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: min-content;
  width: 100%;
`