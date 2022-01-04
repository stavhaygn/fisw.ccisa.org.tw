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

const PartnerCard = ({ name, image, href }) => (
  <div tw="max-w-xs my-4 mx-auto md:mx-0">
    <BlankA href={href}>
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
      <Column>
        <SubTitle tw="text-center">主辦單位</SubTitle>
        <Row tw="md:justify-center md:space-x-10">
          {allOrganizersJson.nodes.map(node => (
            <PartnerCard {...node} key={node.name} />
          ))}
        </Row>
      </Column>
      <Column tw="pb-0">
        <SubTitle tw="text-center">
          主辦單位<span tw="block text-sm text-center">(依場次順序排列)</span>{' '}
        </SubTitle>
        <Row tw="md:justify-center md:space-x-10">
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
