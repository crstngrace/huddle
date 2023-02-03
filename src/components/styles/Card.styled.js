import styled from 'styled-components';
import { up, down, between } from 'styled-breakpoints';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction == 'reverse' ? 'row-reverse' : 'row'};
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 50px 100px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 5px #eaeaea;

  ${down('md')} {
    flex-direction: column-reverse;
    grid-gap: 30px;
    padding: 40px 30px;
    text-align: center;
  }

  ${between('md', 'lg')} {
    padding: 40px 50px;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${up('md')} {
      width: 41%;
    }
  }

  p {
    margin: 0;
    color: var(--grayish-blue);
    font-size: 16px;
    line-height: 1.5em;
  }

  img {
    width: 100%;
    max-width: 300px;

    ${up('md')} {
      float: right;
    }
  }
`;
