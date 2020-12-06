import styled from 'styled-components';

export const CountriesCard = styled.div`
  background-color: ${({ theme }) => theme.colours.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  & img {
    height: 160px;
    object-fit: cover;
    width: 100%;
  }

  & div {
    color: ${({ theme }) => theme.colours.text};
    display: flex;
    flex-direction: column;
    padding: 30px 24px;

    & h2 {
      margin-bottom: 24px;
    }

    & ul {
      list-style: none;

      & li {
        font-size: 16px;

        & span {
          font-weight: 600;
        }

        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
`