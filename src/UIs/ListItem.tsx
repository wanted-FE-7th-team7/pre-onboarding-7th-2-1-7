import styled from 'styled-components';
import { theme } from '../styles/theme';
import { StyledListHeader } from './ListHeader';

interface Props {
  name: string;
  title: string;
}

function ListItem({ name, title }: Props) {
  return (
    <StyledItem>
      <span>{name}</span>
      <span className="title">{title}</span>
    </StyledItem>
  );
}

export default ListItem;

const StyledItem = styled(StyledListHeader)`
  background-color: #ffffff;
  color: ${theme.black};
  justify-content: space-between;
  .title {
    font-weight: 400;
  }
`;
