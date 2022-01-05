/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import tw, { css } from 'twin.macro';

import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import Table from '../../components/Table';

const DateButtonGroup = ({ selectedDay, nodes = [] }) => (
  <div tw="inline-flex my-4">
    {nodes.map(({ date, text, day, linkColor }) => (
      <>
        <Link
          css={[
            tw`inline-flex items-center py-2 px-4 mx-3 mb-3 rounded-lg text-lg border-2 md:text-2xl`,
            css`
              color: ${linkColor};
              color: black;
              background-color: #f7f8f8;
              border-color: ${linkColor};
              &:hover {
                color: white;
                background-color: ${linkColor};
              }
            `,
            // selectedDay === date ? tw`bg-secondary` : tw`bg-dark`,
          ]}
          to={`../${date}`}
        >
          <h2>{text}</h2>
          <span tw="text-base">{day}</span>
        </Link>
      </>
    ))}
  </div>
);

const AgendaPage = ({ data }) => (
  <Page title="會議議程">
    <Column tw="items-center">
      <DateButtonGroup
        {...data.allAgendasJson}
        selectedDay={data.agendasJson.date}
      />
      <Table {...data.agendasJson} />
      <a
        tw="mt-6 py-2 px-3 border-2 border-black rounded-lg text-white text-lg bg-[#AA4DB2] hover:scale-105"
        href="/documents/fisw2022_agenda.pdf"
        download
      >
        金融資安研習營議程PDF下載 📄
      </a>
    </Column>
  </Page>
);

export default AgendaPage;

export const query = graphql`
  query ($id: String) {
    agendasJson(id: { eq: $id }) {
      date
      thead {
        headers {
          text
          colSpan
          bold
          fontSize
          fontColor
          color
        }
        color
      }
      tbody {
        details {
          text
          colSpan
          rowSpan
          bold
          fontSize
          fontColor
          color
        }
        color
      }
    }
    allAgendasJson(sort: { fields: date, order: ASC }) {
      nodes {
        date
        text
        day
        linkColor
      }
    }
  }
`;
