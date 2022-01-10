/** @jsx jsx */
import React, { useState, memo } from 'react';
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { VscTriangleDown, VscMenu } from 'react-icons/vsc';
import _Container from './Container';
import Dropdown from './Dropdown';
import Logo from '../assets/Logo.svg';
import LogoSponsor from '../assets/LogoSponsor.svg';

const Nav = tw.nav`fixed top-0 left-0 right-0 z-50 py-3 bg-dark`;

const Container = tw(
  _Container,
)`xl:w-11/12 flex flex-wrap justify-between items-center`;

const NavLink = tw(
  Link,
)`block py-3 pr-4 pl-3 border-t border-gray-700 text-white text-center hover:text-light bg-transparent rounded 2xl:p-2 2xl:border-0`;

const DropdownButton = tw.button`flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white hover:text-light border-b md:border-0 md:p-0 md:w-auto`;

const DropdownDiv = tw.div`block w-auto px-0 text-base list-none bg-dark rounded divide-y divide-gray-100 shadow`;

const Hamburger = memo(({ onClick }) => (
  <button tw="p-2 ml-3 2xl:hidden" onClick={onClick}>
    <VscMenu tw="w-6 h-6 text-white" />
  </button>
));

// https://zh-hant.reactjs.org/docs/react-api.html#reactmemo
const DropdownNavItem = memo(
  ({ text, children, ...props }) => (
    <Dropdown {...props} overlay={<DropdownDiv>{children}</DropdownDiv>}>
      <DropdownButton>
        {text}
        <VscTriangleDown tw="ml-1 w-3 h-3" />
      </DropdownButton>
    </Dropdown>
  ),
  (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen,
);

const Menu = memo(({ isOpen, navitems = [] }) => {
  // const [openedDropdownId, setOpenedDropdownId] = useState('');

  return (
    <div css={[tw`hidden w-full 2xl:block 2xl:w-auto`, isOpen && tw`block`]}>
      <ul tw="flex flex-col mt-4 2xl:flex-row 2xl:space-x-3 2xl:mt-0 2xl:text-base 2xl:font-medium">
        {navitems.map((node, index) => {
          const { text, link, dropdown } = node;
          const dropdownId = `dropdown-nav-item-id-${index}`;
          return (
            <li key={text}>
              {dropdown ? (
                <>
                  {/* <DropdownNavItem
                        text={text}
                        onClick={() => setOpenedDropdownId(dropdownId)}
                        onClose={() => setOpenedDropdownId('')}
                        isOpen={dropdownId === openedDropdownId}
                      >
                        <ul tw="py-2">
                          {dropdown.map(({ text, link }) => (
                            <li tw="py-2 px-6 hover:bg-[#2cbddd]" key={text}>
                              <NavLink tw="hover:text-white" to={link}>
                                {text}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </DropdownNavItem> */}
                </>
              ) : (
                <NavLink to={link}>{text}</NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allNavitemsJson {
        nodes {
          dropdown {
            link
            text
          }
          link
          text
        }
      }
    }
  `);
  const navitems = data.allNavitemsJson.nodes;

  return (
    <header>
      <Nav>
        <Container>
          <Link to="/">
            <Logo tw="block max-w-sm lg:hidden" />
            <LogoSponsor tw="hidden max-w-sm lg:block" />
          </Link>
          <Hamburger onClick={() => setIsOpenMenu(!isOpenMenu)} />
          <Menu isOpen={isOpenMenu} navitems={navitems}></Menu>
        </Container>
      </Nav>
    </header>
  );
};

export default Navbar;
