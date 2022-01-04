/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Container from '../components/Container';
import Banner from '../assets/Banner.svg';
import CCISA from '../assets/CCISA.svg';
import Column from '../components/Column';
import Row from '../components/Row';

const IndexPage = () => (
  <Layout>
    <Seo title="首頁" />
    <Banner tw="w-full" viewBox="0 0 1920 820" />
    <div tw="hidden md:block md:fixed md:inset-y-1/2 md:right-0 md:w-10 md:h-32 md:bg-secondary">
      <a
        css={[
          tw`block h-full pl-2 pt-3 text-lg`,
          css`
            writing-mode: vertical-rl;
          `,
        ]}
        href="/documents/fisw2022_agenda.pdf"
        download
      >
        下載議程表單
      </a>
      <div
        css={[
          css`
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 3rem 2.5rem 0;
            border-color: transparent #93278f transparent transparent;
          `,
        ]}
      />
    </div>
    <Container>
      <Column>
        <Row>
          <div tw="hidden md:block md:w-2/5">
            <CCISA tw="w-3/5 mx-auto" />
          </div>
          <div tw="w-full md:w-3/5 md:text-lg md:pl-6">
            <h1 tw="text-center text-2xl md:py-3 md:text-left md:text-3xl ">
              — 活動緣起與目的 —
            </h1>
            <ul tw="pl-6 list-disc">
              <li tw="pb-3">
                <h2 tw="pb-2 text-2xl">活動目的：</h2>
                <p>
                  中華民國資訊安全學會為協助大學財金、資工、資管及資訊類相關背景學生對於金融產業的認識及瞭解資安的實務運用，藉由整合產業的力量，舉辦此研習營以協助學生能夠於在校期間認識金融資安的工作，同時建立產業與學界共同合作的機制。
                </p>
              </li>
              <li>
                <h2 tw="pb-2 text-2xl">活動對象：</h2>
                <p>
                  全國各公私立大學與科技院校財金、資工、資管、資訊類相關科系及碩博士在校學生。(結業後頒發研習證書)
                </p>
                <p>
                  ※部分課程亦歡迎公私立大學與科技院校教師報名參加，可憑相關證明文件入場。(無研習證書。)
                </p>
              </li>
            </ul>
          </div>
        </Row>
      </Column>
    </Container>
  </Layout>
);

export default IndexPage;
