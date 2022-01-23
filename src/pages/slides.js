/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';
import Row from '../components/Row';

const SlidesCard = ({ topic, organization, lecturer, link, image }) => (
  <div tw="w-full my-4 mb-8 mx-auto text-center md:max-w-md md:mx-0">
    <a href={link} download>
      <div tw="flex items-center mb-4 md:mb-6 md:h-80">
        <GatsbyImage
          tw="w-full border hover:opacity-60"
          image={getImage(image)}
          alt={`${topic}`}
        />
      </div>
      <div>
        <h3 tw="text-xl">{topic}</h3>
        <p tw="text-base md:text-lg">{`${organization} ${lecturer}`}</p>
      </div>
    </a>
  </div>
);

const SlidesPage = ({ data }) => (
  <Page title="簡報下載">
    {data.allSlidesJson.nodes.map(node => (
      <Column>
        <SubTitle>{node.text}</SubTitle>
        <Row tw="md:space-x-10">
          {node.speeches.map(speech => (
            <SlidesCard {...speech}></SlidesCard>
          ))}
        </Row>
      </Column>
    ))}
  </Page>
);

export default SlidesPage;

export const query = graphql`
  {
    allSlidesJson(sort: { fields: text, order: ASC }) {
      nodes {
        text
        speeches {
          topic
          lecturer
          organization
          link
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
