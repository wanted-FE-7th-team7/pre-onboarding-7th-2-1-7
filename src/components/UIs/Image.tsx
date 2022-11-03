import { memo } from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/theme';

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

export default memo(Image);

const ImgWrapper = styled.div<{ size: string }>`
  ${flex()}
  img {
    ${({ size }) => imageSize[size]}
  }
`;

const imageSize: ImageType = {
  LIST_PAGE: `
    width: 15.2rem;
    height: 8.8rem;
  `,
  DETAIL_PAGE: `
    width: 39rem;
    height: 20rem;
  `,
};
interface ImageType {
  [index: string]: string;
}
