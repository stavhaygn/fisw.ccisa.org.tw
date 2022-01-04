/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';

const ScenePage = () => (
  <Page title="活動花絮">
    <Column>
      <SubTitle tw="text-center">網頁建置中 🚧</SubTitle>
    </Column>
  </Page>
);

export default ScenePage;
