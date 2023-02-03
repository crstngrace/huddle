import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { motion } from 'framer-motion';

const theme = {
  size: {
    sm: '15px 20px',
    md: '15px 80px',
    lg: '20px 100px'
  },
  variant: {
    primary: {
      bg: 'var(--pink)',
      color: '#fff'
    },
    default: {
      bg: '#fff',
      color: '#000'
    }
  }
};

export const StyledButton = styled.button`
  padding: ${({ size }) => (size ? '10px 50px' : '10px 20px')};
  color: ${({ layout }) =>
    layout ? theme.variant[layout].color : theme.variant['default'].color};
  font-size: 12px;
  font-weight: bold;
  background-color: ${({ layout }) =>
    layout ? theme.variant[layout].bg : theme.variant['default'].bg};
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  ${up('md')} {
    padding: ${({ size }) => (size ? theme.size[size] : '15px 50px')};
    font-size: 16px;
  }

  &:hover {
    opacity: 0.6;
    transform: translate(1px, 1px);
  }
`;
