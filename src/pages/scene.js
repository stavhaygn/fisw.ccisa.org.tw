/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import Row from '../components/Row';
import Slideshow from '../components/Slideshow';
import SubTitle from '../components/SubTitle';

const ScenePage = ({ data }) => (
  <Page title="活動花絮">
    <Column>
      <Slideshow
        tw="mx-auto"
        images={data.allFeaturedPhotosJson.nodes[0].photos}
      />
    </Column>
    <Column tw="mt-4">
      <Row tw="md:w-4/5 md:mx-auto md:justify-center">
        {data.allFeaturedPhotosWithTopicJson.nodes.map((node, index) => (
          <Column tw="mb-4 md:mx-4" key={`scene-${index}`}>
            <Slideshow
              tw="md:max-w-xs"
              link={node.link}
              images={node.photos}
              dots={false}
            />
            <SubTitle tw="text-xl text-center md:text-2xl">
              {node.topic}
            </SubTitle>
          </Column>
        ))}
      </Row>
    </Column>
  </Page>
);

export default ScenePage;

export const query = graphql`
  {
    allFeaturedPhotosJson {
      nodes {
        photos {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allFeaturedPhotosWithTopicJson {
      nodes {
        topic
        link
        photos {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
