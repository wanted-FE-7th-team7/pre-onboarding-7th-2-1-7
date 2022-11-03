export const theme = {
  black: '#000000',
  gray: '#D9D9D9',
  blue: '#0094FF',
};

export const flex = (
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row'
) => {
  return `
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};`;
};

export const width = {
  sm: '360px',
  lg: '450px',
};

export const HEADER_HEIGHT = '6rem';
export const CATEGORY_HEIGHT = '4rem';
