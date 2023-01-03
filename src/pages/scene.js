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
    <Column tw="items-center">
      <SubTitle>待研習營課程結束後上傳</SubTitle>
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
