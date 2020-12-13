import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Flag = styled.img`
  background-color: red;
  height: 400px;
  margin-right: 120px;
  object-fit: cover;
  width: 40%;
`

export const Report = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colours.text};
  margin-bottom: 36px;
`

export const Columns = styled.div`
  display: flex;
`

export const Column = styled.ul`
  list-style: none;

  &:first-child {
    margin-right: 72px;
  }

   & li + li {
    margin-top: 16px;
  }
`

export const Item = styled.li`
  color: ${({ theme }) => theme.colours.text};

  & .bold {
    font-weight: 600;
  }
`

export const Row = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 84px;

  & li:first-child {
    margin-right: 12px;
  }

  & li:not(:first-child) {
    background-color: ${({ theme }) => theme.colours.cardBackground};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 8px 24px;
    margin: 4px;
  }

  & li:last-child {
    margin-right: 0;
  }
`