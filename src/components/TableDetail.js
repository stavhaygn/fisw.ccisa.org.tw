/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import parse from 'html-react-parser';
import colors from './Colors';
import fontColors from './FontColors';
import fontSizes from './FontSizes';

const WrapperTh = ({ children, ...props }) => <th {...props}>{children}</th>;
const WrapperTd = ({ children, ...props }) => <td {...props}>{children}</td>;

const TableDetail = ({
  children,
  th,
  color,
  text,
  bold,
  fontColor,
  fontSize,
  ...props
}) => {
  const Detail = th ? WrapperTh : WrapperTd;
  text = text || children;
  return (
    <Detail
      css={[
        tw`py-1 px-1 border border-gray-700 text-center text-base font-medium md:py-4 md:px-6 md:text-lg`,
        colors[color],
        bold && tw`font-bold`,
        fontColors[fontColor],
        fontSizes[fontSize],
      ]}
      {...props}
    >
      {parse(text)}
    </Detail>
  );
};

export default TableDetail;
