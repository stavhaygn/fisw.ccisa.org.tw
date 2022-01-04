/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';

const PageBanner = () => (
  <StaticImage
    tw="w-full"
    src="../images/pageBanner.png"
    alt="FISW page banner"
  />
);

export default PageBanner;
