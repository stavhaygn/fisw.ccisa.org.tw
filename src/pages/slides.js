/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';

const ScenePage = () => (
  <Page title="簡報下載">
    <Column>
      <SubTitle tw="text-center">待會議結束後，將提供簡報下載 🚧</SubTitle>
    </Column>
  </Page>
);

export default ScenePage;
