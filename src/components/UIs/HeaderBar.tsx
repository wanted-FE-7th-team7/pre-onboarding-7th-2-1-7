import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flex, HEADER_HEIGHT, theme } from '../../styles/theme';
import IconBack from './IconBack';

interface Props {
  title: string;
}

function HeaderBar({ title }: Props) {
  const navigate = useNavigate();
  return (
    <StyledHeaderBar>
      {title === '차량상세' ? (
        <div className="ICON_back" onClick={() => navigate(-1)}>
          <IconBack />
        </div>
      ) : (
        <div />
      )}
      {title}
      <div />
    </StyledHeaderBar>
  );
}

export default HeaderBar;

const StyledHeaderBar = styled.div`
  ${flex('space-between')}
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  border-bottom: 1px solid ${theme.black};
  font-weight: 700;
  font-size: 1.7rem;
  height: ${HEADER_HEIGHT};
  padding: 0 2rem;

  div {
    width: 2.4rem;
    height: 2.4rem;
  }
  .ICON_back {
    cursor: pointer;
  }
`;
