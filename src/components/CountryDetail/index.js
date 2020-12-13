import React from 'react'
import {
  Container,
  Flag,
  Report,
  Title,
  Columns,
  Column,
  Item,
  Row,
  RowItem
} from './index.styled';

function CountryDetails({ children, ...restProps }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default CountryDetails

CountryDetails.Flag = function CountryFlag({ ...restProps }) {
  return <Flag {...restProps} />
}

CountryDetails.Report = function CountryReport({ children, ...restProps }) {
  return <Report {...restProps}>{children}</Report>
}

CountryDetails.Title = function CountryTitle({ title, ...restProps }) {
  return <Title {...restProps}>{title}</Title>
}

CountryDetails.Columns = function CountryColumns({ children }) {
  return <Columns>{children}</Columns>
}

CountryDetails.Column = function CountryColumn({ children, ...restProps }) {
  return <Column>{children}</Column>
}

CountryDetails.Item = function CountryItems({ children }) {
  return <Item>{children}</Item>
}

CountryDetails.Row = function CountryRow({ children }) {
  return <Row>{children}</Row>
}