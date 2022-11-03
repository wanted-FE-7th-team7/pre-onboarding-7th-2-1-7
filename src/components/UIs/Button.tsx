import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  display: inline-block;
  height: 2.7rem;
  padding: 0rem 1.8rem;
  margin: 0 0.4rem;
  flex-shrink: 0;

  background-color: ${theme.gray};
  color: #000000;
  font-size: 1.4rem;
  appearance: none;
  border: none;
  border-radius: 62px;
  cursor: pointer;
`;
