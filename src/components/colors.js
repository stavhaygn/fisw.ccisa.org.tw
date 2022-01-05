import tw, { css } from 'twin.macro';

const colors = {
  // primary: tw`bg-primary`,
  // secondary: tw`bg-secondary`,
  // dark: tw`bg-dark`,
  // primary: css`
  //   background: rgba(15, 255, 255, 0.25);
  // `,
  // secondary: css`
  //   background: rgba(147, 39, 143, 0.35);
  // `,
  // dark: css`
  //   background: rgba(35, 24, 22, 0.5);
  // `,
  primary: css`
    background: linear-gradient(
      to right,
      rgba(15, 255, 255, 0.3),
      transparent 150%
    );
  `,
  secondary: css`
    background: linear-gradient(
      to right,
      rgba(147, 39, 143, 0.4),
      transparent 150%
    );
  `,
  'gray-100': tw`bg-gray-100`,
  'gray-200': tw`bg-gray-200`,
  'gray-800': tw`bg-gray-800`,
};

export default colors;
