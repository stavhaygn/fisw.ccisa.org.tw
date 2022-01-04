/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import BlankA from './BlankA';

const Footer = () => (
  <footer tw="flex flex-col items-center w-auto border-t-2 border-primary bg-dark md:py-10 md:mt-16">
    <p tw="text-lg">
      <a href="mailto:secretary@ccisa.org.tw">secretary@ccisa.org.tw</a>{' '}
      Copyright &copy; 2022
    </p>
    <p tw="text-lg">
      <BlankA tw="text-primary" href="https://www.ccisa.org.tw/">
        中華民國資訊安全學會
      </BlankA>{' '}
      07-5250558
    </p>
  </footer>
);

export default Footer;
