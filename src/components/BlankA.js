import React from 'react';

const BlankA = ({ children, href, ...props }) => (
  <a href={href} {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default BlankA;
