import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 50px 0;
  background-image: url('./assets/images/bg-hero-mobile.svg');
  background-repeat: no-repeat;
  background-color: var(--pale-cyan);

  ${up('md')} {
    margin-bottom: 150px;
    background-image: url('./assets/images/bg-hero-desktop.svg');
  }

  p {
    margin-bottom: 50px;
    line-height: 1.5em;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;

  ${up('md')} {
    margin-bottom: 100px;
  }

  a {
    line-height: 0.5em;
  }

  img {
    ${down('md')} {
      width: 120px;
    }
  }

  button {
    white-space: nowrap;
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 50px;

  ${down('lg')} {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledTextContent = styled.div`
  ${down('md')} {
    width: 79%;
  }

  ${up('lg')} {
    width: 40%;
  }

  h1 {
    ${down('md')} {
      font-size: 22px;
    }
  }
`;

export const StyledImgContent = styled.div`
  img {
    width: 100%;
    max-width: 600px;
  }
`;
