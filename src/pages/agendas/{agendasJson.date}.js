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
    {nodes.map(({ date, text }) => (
      <>
        <Link
          css={[
            tw`py-2 px-4 mx-3 mb-3 text-xl border-2 border-gray-700 hover:border-white md:text-3xl `,
            selectedDay === date ? tw`bg-secondary` : tw`bg-dark`,
          ]}
          to={`../${date}`}
        >
          <h2>{text}</h2>
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
        tw="mt-6 py-2 px-3 border-4 border-dark rounded-lg text-dark text-lg bg-primary hover:scale-105"
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
          textColor
        }
        color
      }
      tbody {
        details {
          text
          colSpan
          rowSpan
          bold
          color
        }
        color
      }
    }
    allAgendasJson(sort: { fields: date, order: ASC }) {
      nodes {
        date
        text
      }
    }
  }
`;
