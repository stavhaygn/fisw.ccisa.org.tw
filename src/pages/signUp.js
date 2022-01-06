/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';
import BlankA from '../components/BlankA';
import PageBanner from '../components/PageBanner';

const StyledList = tw.li`mb-3 text-lg`;
const StyledUl = tw.ul`list-inside list-none`;
const Emphasis = tw.span`text-primary`;

const StyledTd = tw.td`py-1 px-1 border border-gray-500 text-lg md:py-4 md:px-6`;
const StyledTh = tw.th`py-1 px-1 border border-gray-500 text-lg font-medium md:py-4 md:px-6`;

const SignUpPage = () => (
  <Page title="活動報名">
    <PageBanner />
    <Column>
      <SubTitle>報名審核標準</SubTitle>
      <StyledUl>
        <StyledList>
          (一)點選
          <BlankA href="https://forms.gle/2eUPWu3JrbLMNKyq6">
            <Emphasis>「線上課程」</Emphasis>
          </BlankA>
          (課程網址於活動前三天公告-將以Google Meet線上課程方式進行)或
        </StyledList>
        <StyledList tw="md:pl-16">
          <BlankA href="https://forms.gle/2eUPWu3JrbLMNKyq6">
            <Emphasis>「實體課程」</Emphasis>
          </BlankA>
          地點為國立臺灣科技大學-綜合研究大樓一樓(RB-102
          國際會議廳)，填寫個人資料表單。
        </StyledList>
        <StyledList>
          (二)上傳其它有利於審查之資料。方可完成報名程序。
        </StyledList>
      </StyledUl>
      <p tw="text-lg">
        ※經報名資料審核程序，將於2022年1月13日(四)於活動網站，公告審查報名通過之活動錄取名單，即可參加活動。
      </p>
    </Column>
    <Column>
      <SubTitle>報名時程</SubTitle>
      <table tw="max-w-2xl text-lg ">
        <tbody>
          <tr>
            <StyledTh>報名截止</StyledTh>
            <StyledTd>
              即日起至2022年1月10日(一)
              <Emphasis tw="block text-secondary">
                課程人數：線上80名、實體50名，額滿為止！
              </Emphasis>
              <Emphasis tw="inline-block mt-1 pt-1 border-t border-dashed border-gray-500 text-red-600">
                ★線上報名人數已超額，暫時無開放線上名額，敬請見諒！
                <br />
                如欲參加研習營，敬請報名實體課程，謝謝！
              </Emphasis>
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>放榜名單</StyledTh>
            <StyledTd>2022年1月13日(四)</StyledTd>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column>
      <SubTitle>報名費用</SubTitle>
      <Emphasis tw="text-xl">本活動採網路報名，無須繳交報名費用。</Emphasis>
    </Column>
    <Column>
      <StyledUl
        css={css`
          list-style-type: '※';
        `}
      >
        <StyledList>
          研習課程約690分鐘，完成研習課程者，將頒發結業研習證書。(線上參與者，會後補發研習證書)
        </StyledList>
        <StyledList>結業贈送「精美小禮」與「摸彩」活動</StyledList>
        <StyledUl
          css={[
            tw`pl-4`,
            css`
              list-style-type: '-';
            `,
          ]}
        >
          <StyledList>
            實體50名同學，結訓即贈水壺/結業證書。(選擇實體上課者，主辦單位於2022年1月18日(二)、1月19(三)中午皆備有便當。)
          </StyledList>
          <StyledList>
            線上80名同學，結訓即贈7-11禮劵(NT100)/結業證書。
          </StyledList>
          <StyledList>
            活動結束前，將於現場抽出3名幸運兒，送出價值$ 6,090 air pods乙台
            (含實體及線上報名名單)。
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
