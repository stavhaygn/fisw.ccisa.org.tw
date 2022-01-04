/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';

const AdmissonListPage = () => (
  <Page title="課程錄取名單">
    <Column>
      <SubTitle tw="text-center">網頁建置中 🚧</SubTitle>
      <p tw="text-center text-2xl">111/01/13(四)公告名單</p>
    </Column>
  </Page>
);

export default AdmissonListPage;
