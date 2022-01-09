/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import tw, { css } from 'twin.macro';
import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import SubTitle from '../../components/SubTitle';
import { VscCalendar } from 'react-icons/vsc';

const NewsPage = ({ data }) => (
  <Page title="最新消息">
    <Column tw="divide-y">
      {data.allMdx.nodes.map(node => (
        <article>
          <Link to={node.slug}>
            <Column tw="pb-8">
              <span tw="inline-flex items-center mb-1 text-base text-gray-500">
                <VscCalendar tw="mr-2" />
                {node.frontmatter.date}
              </span>
              <SubTitle>{node.frontmatter.title}</SubTitle>
              {node.excerpt}
            </Column>
          </Link>
        </article>
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
