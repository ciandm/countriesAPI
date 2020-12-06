import React, { useState } from 'react'
import {
  FaSearch,
  FaAngleDown,
  FaArrowLeft
} from 'react-icons/fa';
import * as S from './CountriesHeader.styled';

function CountriesHeader() {

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [input, setInput] = useState('');
  const [dropdownShown, setDropdownShown] = useState(false);


  const handleDropdownToggle = () => {
    setDropdownShown(!dropdownShown);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
  }

  function handleRegionSelect(region) {

  }

  return (
    <S.CountriesHeader>
      <S.CountriesFilters>
        <S.CountriesSearch onSubmit={(e) => handleSearchSubmit(e)}>
          <FaSearch />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </S.CountriesSearch>
        <S.CountriesDropdownFilter
          dropdownShown={dropdownShown}
          onClick={() => handleDropdownToggle()}>
          Filter by region
          <FaAngleDown
          />
          <S.FilterDropdown
            dropdownShown={dropdownShown}
          >
            {regions.map(region => (
              <li
                key={region}
                onClick={() => handleRegionSelect(region)}>
                {region}
              </li>))}
          </S.FilterDropdown>
        </S.CountriesDropdownFilter>
      </S.CountriesFilters>
      <S.CountriesReturn>
        <FaArrowLeft />
        Back
      </S.CountriesReturn>
    </S.CountriesHeader>
  )
}

export default CountriesHeader
