/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';
import BlankA from '../components/BlankA';
import PageBanner from '../components/PageBanner';

const StyledList = tw.li`mb-2 text-base md:mb-3 md:text-lg`;
const StyledUl = tw.ul`list-inside list-none`;
const Emphasis = tw.span`text-primary`;

const StyledTd = tw.td`py-1 px-1 border border-gray-500 text-base md:py-4 md:px-6 md:text-lg`;
const StyledTh = tw.th`py-1 px-1 border border-gray-500 text-base font-medium md:py-4 md:px-6 md:text-lg`;

const SignUpPage = () => (
  <Page title="活動報名">
    <PageBanner />
    <Column>
      <SubTitle>報名審核標準</SubTitle>
      <StyledUl>
        <StyledList>
          (一)點選
          <BlankA href="https://docs.google.com/forms/d/e/1FAIpQLSdyzpW7WMHshe7mW7jPdGst13QeLXPXYbbNKGevWdtilG5m1g/viewform">
            <Emphasis>「線上課程」</Emphasis>
          </BlankA>
          (課程網址於活動前三天公告-將以Google Meet線上課程方式進行)或
        </StyledList>
        <StyledList tw="md:pl-16">
          <BlankA href="https://docs.google.com/forms/d/e/1FAIpQLSdyzpW7WMHshe7mW7jPdGst13QeLXPXYbbNKGevWdtilG5m1g/viewform">
            <Emphasis>「實體課程」</Emphasis>
          </BlankA>
          地點為集思北科會議中心二樓 (貝塔廳)，填寫個人資料表單。
        </StyledList>
        <StyledList>
          (二)上傳其它有利於審查之資料。方可完成報名程序。
        </StyledList>
      </StyledUl>
      <p tw="text-base md:text-lg">
      ※經報名資料審核程序，將於2023年2月3日(五)公告於活動網站，公告審查報名通過之活動錄取名單，即可參加活動。
      </p>
    </Column>
    <Column>
      <SubTitle>報名時程</SubTitle>
      <table tw="max-w-2xl text-lg ">
        <tbody>
          <tr>
            <StyledTh>報名截止</StyledTh>
            <StyledTd>
              即日起至2023年1月16日(一)
              <Emphasis tw="block text-secondary">
                課程人數：線上50名學生 & 30名銀行相關領域專業人士、實體50名，額滿為止！
              </Emphasis>
              <Emphasis tw="inline-block mt-1 pt-1 border-t border-dashed border-gray-500 text-red-600">
                ★研習證書：兩日實體課程確實簽到結業者，結訓即頒發結業證書；線上參與者，請恕無法提供結業證書 (線上課程網址：將於活動前3天公告)。
              </Emphasis>
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>放榜名單</StyledTh>
            <StyledTd>2023年2月3日(五)</StyledTd>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column>
      <SubTitle>報名費用</SubTitle>
      <Emphasis tw="text-base md:text-xl">
        本活動採網路報名，無須繳交報名費用。
      </Emphasis>
    </Column>
    <Column>
      <StyledUl
        css={css`
          list-style-type: '※';
        `}
      >
        <StyledList>
          研習課程約540分鐘，實體完成研習課程者，將頒發結業研習證書。
        </StyledList>
        <StyledList>實體課程結業並確實兩日簽到者，可參與「摸彩」活動</StyledList>
        <StyledUl
          css={[
            tw`pl-4`,
            css`
              list-style-type: '-';
            `,
          ]}
        >
          <StyledList>
            活動結束前，將於現場抽出6名幸運兒，送出價值$7,490 AirPods Pro(第二代)乙台、價值$3,000 HomePod mini 三台、價值$990 AirTag 2個
          </StyledList>
        </StyledUl>
      </StyledUl>
    </Column>
    <Column>
      <SubTitle>聯絡方式</SubTitle>
      <StyledUl>
        <StyledList>中華民國資訊安全學會 林秘書</StyledList>
        <StyledList>電話：07-5250558</StyledList>
        <StyledList>
          信箱：{' '}
          <a tw="text-primary" href="mailto:secretary@ccisa.org.tw">
            secretary@ccisa.org.tw
          </a>
        </StyledList>
      </StyledUl>
    </Column>
  </Page>
);

export default SignUpPage;
