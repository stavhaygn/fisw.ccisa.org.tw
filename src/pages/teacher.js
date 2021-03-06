/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';
import Table from '../components/Table';
import PageBanner from '../components/PageBanner';

const StyledList = tw.li`text-center mb-1 text-base md:mb-3 md:text-lg`;

const TeacherPage = ({ data }) => (
  <Page title="師資陣容">
    <PageBanner />
    <Column>
      <SubTitle tw="text-center">主辦單位</SubTitle>
      <ul>
        <StyledList>中華民國資訊安全學會</StyledList>
        <StyledList>國立臺灣科技大學管理學院</StyledList>
      </ul>
    </Column>
    <Column>
      <SubTitle tw="text-center">協辦單位</SubTitle>
      <ul>
        <StyledList>國立中山大學資訊安全研究中心</StyledList>
        <StyledList>普鴻資訊股份有限公司</StyledList>
      </ul>
    </Column>
    <Column>
      <SubTitle tw="text-center">
        師資陣容<span tw="text-base">(依場次順序排列)</span>
      </SubTitle>
      <Table tw="md:max-w-2xl md:mx-auto" {...data.teachersJson} />
    </Column>
  </Page>
);

export default TeacherPage;

export const query = graphql`
  {
    teachersJson {
      thead {
        headers {
          text
          colSpan
          fontSize
          fontColor
        }
        color
      }
      tbody {
        details {
          text
          colSpan
        }
        color
      }
    }
  }
`;
