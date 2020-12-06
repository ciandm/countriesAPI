import React from 'react'
import * as S from './Countries.styled';

function Countries({ children }) {
  return (
    <S.Countries>
      {children}
    </S.Countries>
  )
}

export default Countries
