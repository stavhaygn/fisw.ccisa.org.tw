/** @jsx jsx */
import React from 'react';
import { jsx, keyframes } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Container from '../components/Container';
import Banner from '../assets/Banner.svg';
import MobileBanner from '../assets/MobileBanner.svg';
import CCISA from '../assets/CCISA.svg';
import Column from '../components/Column';
import Row from '../components/Row';
import BlankA from '../components/BlankA';

// https://codepen.io/nxworld/pen/OyRrGy
const ScrollDown = () => (
  <span
    css={[
      tw`absolute inset-x-2/4 w-10 h-10 border-l-2 border-b-2 border-white -rotate-45 box-border`,
      css`
        top: -8rem;
        animation: ${keyframes`
      0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
      }
    
    `} 1.5s infinite;
      `,
    ]}
  />
);

const IndexPage = () => (
  <Layout dark>
    <Seo title="首頁" />
    <div tw="block md:hidden">
      <MobileBanner tw="w-full" />
    </div>
    <div tw="hidden relative md:block">
      <Banner tw="w-full" />
      <BlankA
        css={[
          tw`absolute w-1/6 h-1/6`,
          css`
            top: 52.5%;
            left: 38.1%;
          `,
        ]}
        href="https://docs.google.com/forms/d/e/1FAIpQLSdyzpW7WMHshe7mW7jPdGst13QeLXPXYbbNKGevWdtilG5m1g/viewform"
      />
    </div>
    <div tw="hidden relative xl:block">
      <a href="#about">
        <ScrollDown />
      </a>
    </div>
    <div tw="hidden md:block md:fixed md:inset-y-1/2 md:right-0 md:w-10 md:h-32 md:bg-white">
      <a
        css={[
          tw`block h-full pl-2 pt-3 text-lg text-[#b79963]`,
          css`
            writing-mode: vertical-rl;
          `,
        ]}
        href="/documents/fisw2023_agenda.pdf"
        download
      >
        下載議程表單
      </a>
      <div
        css={[
          tw`w-0 h-0 border-solid`,
          css`
            border-width: 0 3rem 2.5rem 0;
            border-color: transparent white transparent transparent;
          `,
        ]}
      />
    </div>
    <Container>
      <Column tw="mt-8 mb-6">
        <Row>
          <div tw="hidden md:block md:w-2/5">
            <CCISA tw="w-3/5 mx-auto" />
          </div>
          <div tw="w-full md:w-3/5 md:text-lg md:pl-6" id="about">
            <h1 tw="py-4 text-center text-3xl md:text-left">
              — 活動緣起與目的 —
            </h1>
            <ul tw="pl-6 list-disc">
              <li tw="mb-3">
                <h2 tw="mb-2 text-2xl">活動目的：</h2>
                <p>
                  中華民國資訊安全學會為協助大學財金、資工、資管及資訊類相關背景學生對於金融產業的認識及瞭解資安的實務運用，藉由整合產業的力量，舉辦此研習營以協助學生能夠於在校期間認識金融資安的工作，同時建立產業與學界共同合作的機制。
                </p>
              </li>
              <li>
                <h2 tw="mb-2 text-2xl">活動對象：</h2>
                <p>
                  全國各公私立大學與科技院校財金/資工/資管及資訊類相關科系及碩士在校學生。
                </p>
                <p>
                  ※實體課程限學生參與；線上課程開放學校位於新竹(含)以南，外島及離島地區的學生選填。
                </p>
                <p>
                  ※部分課程亦歡迎教授及銀行相關領域專業人士報名參加線上課程。
                </p>
                <p>※全程完成研習課程並確實簽到者，結業後頒發研習證書。</p>
              </li>
            </ul>
          </div>
        </Row>
      </Column>
    </Container>
  </Layout>
);

export default IndexPage;
