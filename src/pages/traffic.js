/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';

const SplitLineTitle = ({ children }) => (
  <div tw="relative mb-1 border-b border-black md:mb-3">
    <h3 tw="text-xl md:text-2xl">{children}</h3>
  </div>
);

const VehicleSection = ({ children, vehicle }) => (
  <Column tw="py-1 mb-3 md:py-3 md:mb-0">
    <SplitLineTitle>{vehicle}</SplitLineTitle>
    {children}
  </Column>
);

const StyledList = tw.li`mb-1 text-base md:mb-3 md:text-lg`;

const trafficPage = () => (
  <Page title="交通資訊">
    <Column>
      <SubTitle>活動地點</SubTitle>
      <p tw="text-base md:text-lg">
        集思北科大會議中心二樓 (貝塔廳) (臺北市大安區忠孝東路三段1號)
      </p>
      <iframe
        tw="w-full py-3"
        height="480"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7639915356863!2d121.53590421555617!3d25.04208218396856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97d14c16483%3A0xad114637e061ac57!2z6ZuG5oCd5YyX56eR5aSn5pyD6K2w5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1672535533157!5m2!1szh-TW!2stw"
        title="tutorial"
      ></iframe>
    </Column>
    <Column>
      <SubTitle>集思北科大會議中心交通資訊圖</SubTitle>
      <StaticImage
        tw="md:max-w-5xl"
        src="../images/ntut.png"
        alt="NTUT location"
      />
    </Column>
    <Column>
      <SubTitle>交通方式</SubTitle>
      <VehicleSection vehicle="開車 🚗">
        <ol tw="list-inside">
          <StyledList>建國南北快速道路</StyledList>
          <ol tw="list-none pl-4">
            <StyledList>
              由北往南：建國南路1段與忠孝東路3段口下匝道後左轉。
            </StyledList>
            <StyledList>由南往北：辛亥路與建國南路口下匝道直行。</StyledList>
          </ol>
        </ol>
      </VehicleSection>
      <VehicleSection vehicle="公車 🚌">
        <ul>
          <StyledList>
            正義郵局站
            (走路約2分鐘)：1813支線、1815、212、232副、232正、262(含區間車)、299、605、919、忠孝新幹線。
          </StyledList>
        </ul>
      </VehicleSection>
      <VehicleSection vehicle="捷運 🚈">
        <ol tw="list-inside list-decimal">
          <StyledList>
            【忠孝復興捷運站】1號出口：直走500公尺，約8分鐘抵達。
          </StyledList>
          <StyledList>
            【忠孝新生捷運站】4號出口：往回走，往SOGO方向直走500公尺，約8分鐘抵達。
          </StyledList>
        </ol>
      </VehicleSection>
      <VehicleSection vehicle="停車">
        <ul>
          <StyledList>
            億光地下停車場(電梯直達會議中心)：$50元/時，建國南路一段(往建國北方向)，過忠孝東路三段即可於右側看見停車場入口。
          </StyledList>
        </ul>
      </VehicleSection>
    </Column>
  </Page>
);

export default trafficPage;
