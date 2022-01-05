/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import Layout from './Layout';
import Seo from '../Seo';
import Container from '../Container';
import BreadCrumb from '../BreadCrumb';

const Title = ({ children }) => (
  <h1 tw="text-4xl block my-2 text-center md:my-6 md:text-6xl">{children}</h1>
);

const Page = ({ children, title, description }) => (
  <Layout>
    <Seo title={title} description={description}></Seo>
    <Container tw="mb-10">
      <Title>{title}</Title>
      <BreadCrumb path={[title]} />
      {children}
    </Container>
  </Layout>
);

export default Page;
