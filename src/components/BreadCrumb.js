/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { VscHome, VscChevronRight } from 'react-icons/vsc';

const BreadcrumbItem = ({ children }) => (
  <li>
    <div tw="flex items-center">
      <VscChevronRight />
      <span tw="ml-1 text-sm font-medium text-gray-500">{children}</span>
    </div>
  </li>
);

const BreadCrumb = ({ path = [] }) => (
  <div tw="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200">
    <ol tw="inline-flex items-center space-x-1 md:space-x-3">
      <li tw="inline-flex items-center">
        <Link
          to="/"
          tw="inline-flex items-center text-sm text-gray-700 hover:text-gray-900"
        >
          <VscHome tw="h-4 w-4 mr-2" />
          首頁
        </Link>
      </li>
      {path.length == 2 && <BreadcrumbItem>{path[0]}</BreadcrumbItem>}
      {/* {<BreadcrumbItem>{path.at(-1)}</BreadcrumbItem>} */}
    </ol>
  </div>
);

export default BreadCrumb;
