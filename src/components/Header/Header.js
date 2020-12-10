import React from 'react'
import {
  FaMoon,
  FaRegMoon
} from 'react-icons/fa';
import * as S from './Header.styled';
import { ThemeConsumer } from 'styled-components'

function Header({
  handleThemeToggle
}) {
  return (
    <ThemeConsumer>
      {({ name }) => {
        return (
          <S.Header>
            <S.HeaderContents>
              <h1>Where in the world?</h1>
              <S.Switcher onClick={handleThemeToggle}>
                {name === 'light' ? <FaRegMoon /> : <FaMoon />}
                <span>{name} Mode</span>
              </S.Switcher>
            </S.HeaderContents>
          </S.Header>
        )
      }}
    </ThemeConsumer>
  )
}

export default Header
