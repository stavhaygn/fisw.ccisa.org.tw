/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import tw, { css } from 'twin.macro';
import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import SubTitle from '../../components/SubTitle';

const NewsPage = ({ data }) => (
  <Page title="最新消息">
    <Column>
      <SubTitle>
        {data.mdx.frontmatter.title}{' '}
        <span tw="text-lg">{data.mdx.frontmatter.date}</span>
      </SubTitle>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Column>
  </Page>
);

export default NewsPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;
