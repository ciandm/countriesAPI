import React, { useState } from 'react'
import {
  FaSearch,
  FaAngleDown,
  FaArrowLeft
} from 'react-icons/fa';
import * as S from './CountriesHeader.styled';

function CountriesHeader() {

  const [dropdownShown, setDropdownShown] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownShown(!dropdownShown);
  }

  return (
    <S.CountriesHeader>
      <S.CountriesFilters>
        <S.CountriesInput>
          <FaSearch />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
          />
        </S.CountriesInput>
        <S.CountriesDropdownFilter
          dropdownShown={dropdownShown}
          onClick={() => handleDropdownToggle()}>
          Filter by region
          <FaAngleDown
          />
          <S.FilterDropdown
            dropdownShown={dropdownShown}
          >
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
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
