import { useNavigate } from 'react-router';
import { Button } from './UIs/Button';
import StyledText from './UIs/StyledText';

function Error() {
  const navigate = useNavigate();
  return (
    <StyledText>
      <p style={{ color: 'red' }}>예기치 못한 에러가 발생했습니다.</p>
      <br />
      <Button onClick={() => navigate('/')}>메인페이지로 돌아가기</Button>
    </StyledText>
  );
}

export default Error;
