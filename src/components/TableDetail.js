/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import parse from 'html-react-parser';
import colors from './colors';
import textColors from './textColors';

const WrapperTh = ({ children, ...props }) => <th {...props}>{children}</th>;
const WrapperTd = ({ children, ...props }) => <td {...props}>{children}</td>;

const TableDetail = ({ th, color, text, bold, textColor, ...props }) => {
  const Detail = th ? WrapperTh : WrapperTd;
  return (
    <Detail
      css={[
        tw`py-1 px-1 border-2 border-gray-700 text-center text-lg md:py-4 md:px-6`,
        colors[color],
        bold && tw`font-bold`,
        textColors[textColor],
      ]}
      {...props}
    >
      {parse(text)}
    </Detail>
  );
};

export default TableDetail;
