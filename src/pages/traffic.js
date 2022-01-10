/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Page from '../components/layout/Page';
import Column from '../components/Column';
import SubTitle from '../components/SubTitle';
import Material4 from '../assets/Material4.svg';

const SplitLineTitle = ({ children }) => (
  <div tw="relative mb-1 border-b border-black md:mb-3">
    <Material4
      css={[
        tw`absolute w-8`,
        css`
          top: -22px;
          left: -10px;
        `,
      ]}
    />
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
        國立臺灣科技大學(臺北市大安區基隆路4 段 43 號)
        <br />
        綜合研究大樓一樓(RB-102 國際會議廳)
      </p>
      <iframe
        tw="w-full py-3"
        height="480"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.7909336699436!2d121.5414977!3d25.0143202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa216b3fafe7%3A0x6dd04abf8f45b55e!2z5ZyL56uL5Y-w54Gj56eR5oqA5aSn5a2457ac5ZCI56CU56m25aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1640074931785!5m2!1szh-TW!2stw"
        title="tutorial"
      ></iframe>
    </Column>
    <Column>
      <SubTitle>校區平面配置圖</SubTitle>
      <StaticImage src="../images/ntust.jpg" alt="NTUST campus layout" />
    </Column>
    <Column>
      <SubTitle>交通方式</SubTitle>
      <VehicleSection vehicle="高鐵 🚄">
        <ul>
          <StyledList>
            搭乘高鐵至高鐵台北站，轉搭乘台北捷運新店線至公館站，
            乘坐計程車約30分鐘路程，車資約250~300元左右。
          </StyledList>
        </ul>
      </VehicleSection>
      <VehicleSection vehicle="開車 🚗">
        <ol
          className="pl-3"
          css={[
            tw`list-inside`,
            css`
              list-style-type: lower-alpha;
            `,
          ]}
        >
          <StyledList>
            由中山高速公路下圓山交流道，接台北市建國南北高架道路，下辛亥路往木柵方向行駛，於辛亥路二段與基隆路交叉口（台大校園旁）右轉，過長興街後即可到達台灣科大。
          </StyledList>
          <StyledList>
            由北二高接台北聯絡道，於辛亥路三段與基隆路交叉口左轉，過長興街後即可到達台灣科大。
          </StyledList>
        </ol>
      </VehicleSection>
      <VehicleSection vehicle="台北聯營公車 🚌">
        <ul>
          <StyledList>
            搭乘聯營1、207、254、275、275副線、275區間車、688、672、673、907、綠11、棕12、基隆路幹線。
          </StyledList>
        </ul>
      </VehicleSection>
      <VehicleSection vehicle="捷運→客運 🚈">
        <ol tw="list-inside list-decimal">
          <StyledList>新店線：</StyledList>
          <ol tw="list-none pl-2">
            <StyledList>
              【路線a.】由公館站2號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可到達本校。
            </StyledList>
            <StyledList>
              【路線b.】於公館站1號「水源市場」出口轉乘1、673、907、綠11、棕12直達本校。
            </StyledList>
          </ol>
          <StyledList>
            文湖線：於捷運六張犁站（往公館、永和方向）轉乘1、207、672、650、基隆客運板基線直達本校。
          </StyledList>
        </ol>
      </VehicleSection>
      <VehicleSection vehicle="國道、省道客運">
        <ol tw="list-none leading-5">
          <StyledList>
            福和客運（板橋－基隆）、（台北－基隆）、（新店－基隆）、（德霖技術學院－基隆）。
          </StyledList>
          <StyledList>基隆客運（板橋－基隆）。</StyledList>
          <StyledList>
            指南客運、中壢客運（桃園－台北市政府），經新店、公館、六張犁 。
          </StyledList>
          <StyledList>
            台中客運、大有巴士（台中－台北），經龍潭、新店、六張犁、捷運市府站、松山車站
            。
          </StyledList>
          <StyledList>
            國光客運、台聯客運、中壢客運（中壢－台北）經中永和、公館、六張犁、捷運市府站
            。
          </StyledList>
          <StyledList>
            亞聯客運（新竹－台北），經工研院、清大、交大、竹科、龍潭、新店、捷運景美、捷運萬隆、捷運公館、新生南路、仁愛路、臺北市政府。（停靠捷運公館站，不停靠台灣科大）。
          </StyledList>
          <StyledList>
            豪泰客運（竹北－台北），經新竹縣政府、新竹稅捐處、一高竹北交流道站、二高竹林交流道站、新店、捷運景美、捷運萬隆、捷運公館、新生南路、捷運科技大樓、捷運大安、捷運忠孝復興、捷運忠孝敦化、捷運國父紀念館、捷運市府站。（停靠捷運公館站，不停靠台灣科大）。
          </StyledList>
        </ol>
      </VehicleSection>
    </Column>
  </Page>
);

export default trafficPage;
