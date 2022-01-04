/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import TableRow from './TableRow';

const Table = ({ thead, tbody, ...props }) => (
  <>
    <table
      tw="w-full border-collapse border border-gray-100 md:w-4/5"
      {...props}
    >
      <thead>{thead && thead.map(row => <TableRow {...row} />)}</thead>
      <tbody>{tbody && tbody.map(row => <TableRow {...row} />)}</tbody>
    </table>
  </>
);

export default Table;
