import styled from 'styled-components';

export const Header = styled.nav`
  background-color: ${({ theme }) => theme.name === 'light' ? theme.colours.white : theme.colours.elements};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 80px;
`

export const HeaderContents = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colours.text};
  display: flex;
  height: 100%;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
`

export const Switcher = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;

  & svg {
    margin-right: 8px;
  }

  & span {
    text-transform: capitalize;
    font-weight: 600;
  }
`