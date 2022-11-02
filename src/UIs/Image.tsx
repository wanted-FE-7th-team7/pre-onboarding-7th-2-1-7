import styled from 'styled-components';
import { flex } from '../styles/theme';

interface Props {
  src: string;
  size: string;
}

function Image({ src, size }: Props) {
  return (
    <ImgWrapper size={size}>
      <img src={src} alt="car" />
    </ImgWrapper>
  );
}

export default Image;

const ImgWrapper = styled.div<{ size: string }>`
  ${flex()}
  img {
    ${({ size }) => imageSize[size]}
  }
`;

const imageSize: ImageType = {
  LIST_PAGE: `
    max-width: 15.2rem;
    max-height: 8rem;
  `,
  DETAIL_PAGE: `
    max-width: 39rem;
    max-height: 20rem;
  `,
};
interface ImageType {
  [index: string]: string;
}
