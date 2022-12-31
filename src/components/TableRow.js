/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import TableDetail from './TableDetail';
import colors from './colors';

const TableRow = ({ color, headers = [], details = [], ...props }) => (
  <tr css={[colors['dark'], colors[color]]} {...props}>
    {headers.map(header => (
      <TableDetail th {...header} />
    ))}
    {details.map(detail => (
      <TableDetail {...detail} />
    ))}
  </tr>
);

export default TableRow;
