/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import tw, { css } from 'twin.macro';
import Page from '../../components/layout/Page';
import Column from '../../components/Column';
import TableDetail from '../../components/TableDetail';

const ListButtonGroup = ({ nodes = [] }) => (
  <div tw="inline-flex items-center w-full mt-2 mb-4 justify-between md:w-min md:mb-6">
    {nodes.map(({ text, link, linkColor }, index) => (
      <>
        <Link
          css={[
            tw`inline-flex items-center py-1 px-1 text-xl md:text-2xl md:mx-3 hover:border-b`,
            css`
              border-color: ${linkColor};
            `,
          ]}
          to={`../${link}`}
        >
          <h2
            css={[
              tw`w-max`,
              css`
                color: ${linkColor};
              `,
            ]}
          >
            {text}
          </h2>
        </Link>
        {index != nodes.length - 1 && <div tw="text-xl md:text-2xl">/</div>}
      </>
    ))}
  </div>
);

const chunk = (arr, len) => {
  const chunks = [],
    n = arr.length;
  let i = 0;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
};

const AdmissionListPage = ({ data }) => (
  <Page title="課程錄取名單">
    <Column tw="items-center">
      <ListButtonGroup {...data.allAdmissionListJson} />
      <table>
        <thead>
          <tr>
            <TableDetail tw="pb-4 border-0 text-xl md:text-2xl" th colSpan="5">
              {`${data.admissionListJson.text} ${data.admissionListJson.participants.length} 人`}
            </TableDetail>
          </tr>
        </thead>
        <tbody>
          {chunk(data.admissionListJson.participants, 5).map(names => (
            <tr>
              {names.map(name => (
                <TableDetail tw="px-3 border-0 md:px-10">{name}</TableDetail>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p tw="mt-6 text-base text-secondary whitespace-pre-line md:text-lg">
        {data.admissionListJson.note}
      </p>
    </Column>
  </Page>
);

export default AdmissionListPage;

export const query = graphql`
  query ($id: String) {
    admissionListJson(id: { eq: $id }) {
      text
      note
      participants
    }
    allAdmissionListJson(sort: { fields: link, order: DESC }) {
      nodes {
        text
        link
        linkColor
      }
    }
  }
`;
