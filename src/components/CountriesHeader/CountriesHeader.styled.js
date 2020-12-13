import styled, { css } from 'styled-components';

const elementStyles = css`
  background-color: ${({ theme }) => theme.name === 'light' ? theme.colours.white : theme.colours.elements};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: none;
  outline: none;
`

export const CountriesHeader = styled.header`
  max-width: 1280px;
  margin-bottom: 48px;
  width: 100%;

  @media screen and (max-width: 480px) {
    margin-bottom: 40px;
  }
`

export const CountriesFilters = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CountriesSearch = styled.form`
  align-items: center;
  color: ${({ theme }) => theme.name === 'light' ? theme.colours.elements : theme.colours.white};
  display: flex;
  position: relative;
  width: 480px;

  & input {
    ${elementStyles};
    border-radius: 8px;
    color: inherit;
    font-size: 16px;
    padding: 20px 72px;
    width: 100%;

    &::placeholder {
      color: inherit;
    }
  }

  & svg#search {
    color: inherit;
    left: 32px;
    position: absolute;
  }

`

export const SearchReset = styled.button.attrs(() => ({
  type: 'button'
}))`
  cursor: pointer;
  background-color: transparent;
  border: none;
  height: 100%;
  outline: none;
  position: absolute;
  padding: 0 16px;
  right: 0;

  & svg {
    fill: ${({ theme }) => theme.name === 'light' ? theme.colours.elements : theme.colours.white};
    height: 16px;
    width: 16px;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colours.text};
  }
`

export const CountriesDropdownFilter = styled.div`
  ${elementStyles};
  align-items: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.name === 'light' ? theme.colours.elements : theme.colours.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 20px 20px;
  position: relative;
  width: 200px;

  & .region {
    align-items: center;
    display: flex;
    
    & svg {
      margin-right: 4px;
    }
  }

  & svg#dropdown {
    transition: transform 0.2s ease-in-out;
    transform: ${({ dropdownShown }) => dropdownShown === true ? 'rotate(180deg)' : ''};
  }

  @media screen and (max-width: 480px) {
    margin-top: 48px;
  }
`

export const FilterDropdownContainer = styled.div`
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
`

export const FilterDropdown = styled.ul`
  ${elementStyles};
  display: ${({ dropdownShown }) => dropdownShown === true ? 'flex' : 'none'};
  flex-direction: column;
  border-radius: 8px;
  list-style: none;
  margin-top: 4px;
  width: 100%;
  padding: 20px;

  & li:hover {
    color: ${({ theme }) => theme.colours.text};
  }

  & li:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const CountriesReturn = styled.button`
  ${elementStyles};
  align-items: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.name === 'light' ? theme.colours.elements : theme.colours.white};
  display: flex;
  font-size: 16px;
  padding: 20px 40px 20px 32px;

  & svg {
    margin-right: 12px;
  }
`