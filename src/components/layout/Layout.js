import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import Navbar from '../Navbar';
import Footer from '../Footer';

// https://github.com/ben-rogerson/twin.macro/blob/master/docs/fonts.md
const customStyles = css`
  * {
    color: white;
    font-family: 'Noto Sans TC';
    font-size: 100;
  }
  body {
    margin-top: 4.75rem;
    background-image: linear-gradient(to right, #231815, transparent 105%),
      linear-gradient(to right, #231815, #161098);
  }
`;

const Container = tw.div`flex flex-col h-screen`;
const Content = tw.div`mb-auto`;

const Layout = ({ children }) => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  </>
);

export default Layout;
