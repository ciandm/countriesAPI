import React, { useState } from 'react'
import {
  FaSearch,
  FaAngleDown,
  FaArrowLeft,
  FaTimesCircle
} from 'react-icons/fa';
import * as S from './CountriesHeader.styled';

function CountriesHeader({
  handleSearch,
  handleSearchReset,
  handleRegionSelect,
  handleRegionReset,
  region: selectedRegion,
  selectedCountry,
  handleCountryDeselect
}) {

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [input, setInput] = useState('');
  const [dropdownShown, setDropdownShown] = useState(false);


  const handleDropdownToggle = (value) => {
    setDropdownShown(value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    handleSearch(input);
  }

  function handleResetClick() {
    if (input === '') return;
    setInput('');
    handleSearchReset('');
  }

  return (
    <S.CountriesHeader>
      {/* if no country is selected, show filter options */}
      {
        !selectedCountry &&
        <S.CountriesFilters>
          <S.CountriesSearch onSubmit={(e) => handleSearchSubmit(e)}>
            <FaSearch id="search" />
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Search for a country..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <S.SearchReset
              onClick={() => handleResetClick()}
            >
              <FaTimesCircle id="reset" />
            </S.SearchReset>
          </S.CountriesSearch>
          {/* Dropdown */}
          <S.CountriesDropdownFilter
            dropdownShown={dropdownShown}
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
          >
            {selectedRegion && selectedRegion}
            {!selectedRegion && 'Filter by region'}
            <FaAngleDown id="dropdown" />
            <S.FilterDropdownContainer>
              <S.FilterDropdown
                dropdownShown={dropdownShown}
              >
                {regions.map(region => (
                  <li
                    key={region}
                    onClick={() => handleRegionSelect(region)}
                  >
                    {region}
                  </li>))}
                {selectedRegion && <li onClick={() => handleRegionReset()}>Remove filter</li>}
              </S.FilterDropdown>
            </S.FilterDropdownContainer>
          </S.CountriesDropdownFilter>
          {/* Dropdown ends */}
        </S.CountriesFilters>
      }
      {/* if a country has been selected, display a return button */}
      { selectedCountry &&
        <S.CountriesReturn onClick={() => handleCountryDeselect()}>
          <FaArrowLeft />
          Back
        </S.CountriesReturn>
      }
    </S.CountriesHeader>
  )
}

export default CountriesHeader
