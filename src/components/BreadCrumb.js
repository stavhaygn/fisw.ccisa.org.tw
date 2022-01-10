/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { VscHome, VscChevronRight } from 'react-icons/vsc';

const BreadcrumbItem = ({ children }) => (
  <li>
    <div tw="flex items-center">
      <VscChevronRight />
      <span tw="text-sm ml-1 font-medium text-gray-800 md:text-base">
        {children}
      </span>
    </div>
  </li>
);

const BreadCrumb = ({ path = [] }) => (
  <div tw="flex mb-0 py-2 px-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 md:mb-4 md:py-3 md:px-5">
    <ol tw="inline-flex items-center space-x-1 md:space-x-3">
      <li tw="inline-flex items-center">
        <Link
          to="/"
          tw="inline-flex items-center text-sm text-gray-700 hover:text-primary md:text-base"
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
