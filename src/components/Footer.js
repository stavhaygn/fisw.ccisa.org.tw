/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import BlankA from './BlankA';

const Footer = () => (
  <footer tw="flex flex-col items-center py-6 w-auto bg-dark text-white md:py-10 md:mt-16">
    <p tw="text-base md:text-lg">
      <a href="mailto:secretary@ccisa.org.tw">secretary@ccisa.org.tw</a>{' '}
      Copyright &copy; 2022
    </p>
    <p tw="text-base md:text-lg">
      <BlankA tw="text-light" href="https://www.ccisa.org.tw/">
        中華民國資訊安全學會
      </BlankA>{' '}
      07-5250558
    </p>
  </footer>
);

export default Footer;
