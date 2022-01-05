import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import Navbar from '../Navbar';
import Footer from '../Footer';

// https://github.com/ben-rogerson/twin.macro/blob/master/docs/fonts.md
const customStyles = {
  light: css`
    * {
      font-family: 'Noto Sans TC';
    }
    body {
      margin-top: 4.75rem;
    }
  `,
  dark: css`
    * {
      font-family: 'Noto Sans TC';
      color: white;
    }
    body {
      margin-top: 4.75rem;
      background-image: linear-gradient(to right, #231815, transparent 105%),
        linear-gradient(to right, #231815, #161098);
    }
  `,
};

const Container = tw.div`flex flex-col h-screen`;
const Content = tw.div`mb-auto`;

const Layout = ({ children, dark }) => (
  <>
    <BaseStyles />
    <Global styles={dark ? customStyles['dark'] : customStyles['light']} />
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  </>
);

export default Layout;
