/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import Layout from './Layout';
import Seo from '../Seo';
import Container from '../Container';

const Title = ({ children }) => (
  <>
    <h1 tw="text-4xl block my-2 text-center md:my-6 md:text-7xl">{children}</h1>
    {/* <span tw="block text-center font-thin md:text-2xl">
      金融資安 / 數位人才 / 人才培育 / 永續發展
    </span> */}
  </>
);

const Page = ({ children, title, description }) => (
  <Layout>
    <Seo title={title} description={description}></Seo>
    <Container tw="mb-10">
      <Title>{title}</Title>
      {children}
    </Container>
  </Layout>
);

export default Page;
