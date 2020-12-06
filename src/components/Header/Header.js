import React from 'react'
import {
  FaMoon,
  FaRegMoon
} from 'react-icons/fa';
import * as S from './Header.styled';
import { ThemeConsumer } from 'styled-components'

function Header() {
  return (
    <ThemeConsumer>
      {({ name, theme }) => {
        return (
          <S.Header>
            <S.HeaderContents>
              <h1>Where in the world?</h1>
              <S.Switcher>
                {name === 'light' ? <FaRegMoon /> : <FaMoon />}
              </S.Switcher>
            </S.HeaderContents>
          </S.Header>
        )
      }}
    </ThemeConsumer>
  )
}

export default Header
