/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import tw, { css } from 'twin.macro';
import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import SubTitle from '../../components/SubTitle';
import { VscCalendar } from 'react-icons/vsc';

const NewsPage = ({ data }) => (
  <Page title="最新消息">
    <Column>
      <header tw="inline-flex justify-between mb-5 pb-2 border-b ">
        <SubTitle tw="py-0 mb-0">{data.mdx.frontmatter.title} </SubTitle>
        <span tw="inline-flex items-center text-sm text-gray-500 md:text-base">
          <VscCalendar tw="mr-2" />
          {data.mdx.frontmatter.date}
        </span>
      </header>
      <section tw="text-base md:text-lg">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </section>
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
