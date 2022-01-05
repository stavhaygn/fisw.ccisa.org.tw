/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { VscHome, VscChevronRight } from 'react-icons/vsc';

const BreadcrumbItem = ({ children }) => (
  <li>
    <div tw="flex items-center">
      <VscChevronRight />
      <span tw="ml-1 text-base font-medium text-gray-800">{children}</span>
    </div>
  </li>
);

const BreadCrumb = ({ path = [] }) => (
  <div tw="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200">
    <ol tw="inline-flex items-center space-x-1 md:space-x-3">
      <li tw="inline-flex items-center">
        <Link
          to="/"
          tw="inline-flex items-center text-base text-gray-700 hover:text-primary"
        >
          <VscHome tw="h-4 w-4 mr-2" />
          首頁
        </Link>
      </li>
      {path.map(p => (
        <BreadcrumbItem>{p}</BreadcrumbItem>
      ))}
    </ol>
  </div>
);

export default BreadCrumb;
