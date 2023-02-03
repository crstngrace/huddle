import styled from 'styled-components';
import { up, between } from 'styled-breakpoints';

export const StyledContainer = styled.div`
  padding: 0 25px;

  ${up('md')} {
    padding: 0 100px;
  }

  ${between('md', 'lg')} {
    padding: 0 50px;
  }
`;
