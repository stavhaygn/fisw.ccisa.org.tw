/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import tw, { css } from 'twin.macro';
import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import SubTitle from '../../components/SubTitle';

const NewsPage = ({ data }) => (
  <Page title="最新消息">
    <Column tw="divide-y">
      {data.allMdx.nodes.map(node => (
        <Link to={node.slug}>
          <Column>
            <span tw="block text-gray-600">{node.frontmatter.date}</span>
            <SubTitle>{node.frontmatter.title}</SubTitle>

            {node.excerpt}
          </Column>
        </Link>
      ))}
    </Column>
  </Page>
);

export default NewsPage;

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date
        }
        slug
        excerpt(pruneLength: 72, truncate: true)
      }
    }
  }
`;
