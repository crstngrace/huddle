import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';

export const StyledFooter = styled.footer`
  position: relative;
  margin-top: 200px;
  font-size: 15px;

  ${up('md')} {
    margin-top: 250px;
  }

  & > div:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-50%);
  }
`;

export const StyledFooterCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  color: #333;
  font-size: 8px;
  text-align: center;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 5px #eaeaea;

  ${up('md')} {
    font-size: 16px;
  }

  h1 {
    margin-bottom: 30px;

    ${up('md')} {
      margin-bottom: 50px;
      font-size: 28px;
    }
  }
`;

export const StyledFooterMain = styled.div`
  padding: 160px 0 30px 0;
  color: #fff;
  background-color: var(--dark-cyan);

  p {
    margin-top: 30px;
    font-size: 12px;
    text-align: center;

    ${up('md')} {
      text-align: left;
    }
  }

  & > div > div:nth-child(odd) {
    margin-bottom: 50px;
  }

  & > div {
    img {
      width: 150px;
      margin-bottom: 20px;
    }

    ${up('md')} {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
    }
  }
`;

export const StyledFooterCol = styled.div`
  ${up('md')} {
    width: 15%;

    &:first-child {
      width: 35%;
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 20%;
    }
  }
`;

export const StyledList = styled.ul`
  margin: 0;

  li {
    display: flex;
    padding: 10px 0;

    & > span {
      flex-basis: 80%;
      margin-left: 20px;
    }
  }
`;

export const StyledSocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.5em;

    &:hover {
      color: var(--pink);
      border: 1px solid var(--pink);
    }
  }
`;
