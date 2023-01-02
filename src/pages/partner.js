/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import Row from '../components/Row';
import SubTitle from '../components/SubTitle';
import BlankA from '../components/BlankA';
import PageBanner from '../components/PageBanner';

const PartnerCard = ({ name, image, link }) => (
  <div tw="w-full my-4 mx-auto md:max-w-xs md:mx-4">
    <BlankA href={link}>
      {/* wait for twin update to tailwindcss v3, otherwise drop-shadow(--tw-drop-shadow) is not working*/}
      <GatsbyImage
        tw="border p-2 rounded-md mb-3 md:p-0"
        // css={css`
        //   filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
        // `}
        image={getImage(image)}
        alt={`${name} Logo`}
      />
    </BlankA>
  </div>
);

const PartnerPage = ({ data }) => {
  const { allOrganizersJson, allCoOrganizersJson } = data;
  return (
    <Page title="合作夥伴">
      <PageBanner />
      <Column>
        <SubTitle tw="mt-2 mb-0 text-center text-3xl md:mt-0 md:mb-1">
          主辦單位
        </SubTitle>
        <Row tw="md:justify-center">
          {allOrganizersJson.nodes.map(node => (
            <PartnerCard {...node} key={node.name} />
          ))}
        </Row>
      </Column>
      <Column tw="pb-0">
        <SubTitle tw="mb-0 text-center text-3xl md:mb-1">
          協辦單位<span tw="block text-sm text-center">(依場次順序排列)</span>{' '}
        </SubTitle>
        <Row tw="md:px-16 md:justify-center">
          {allCoOrganizersJson.nodes.map(node => (
            <PartnerCard {...node} key={node.name} />
          ))}
        </Row>
      </Column>
    </Page>
  );
};

export default PartnerPage;

export const query = graphql`
  {
    allOrganizersJson {
      nodes {
        name
        link
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allCoOrganizersJson {
      nodes {
        name
        link
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
