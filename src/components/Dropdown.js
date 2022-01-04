// https://ithelp.ithome.com.tw/articles/10276332
/** @jsx jsx */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { jsx, keyframes } from '@emotion/react';
import tw, { css, styled } from 'twin.macro';

import Portal from './Portal';
import { findAttributeInEvent } from '../utils/event';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity: 0;
  }
`;

const OverlayWrapper = styled.div(({ isOpen, childrenSize, gap }) => [
  tw`absolute z-999 rounded text-white bg-black`,
  css`
    animation: ${isOpen ? fadeIn : fadeOut} 0.2s ease-in-out forwards;
    transform: translate(
      calc(-100% + ${childrenSize.width}px),
      ${childrenSize.height + gap}px
    );
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `,
]);

const Dropdown = ({
  children,
  overlay,
  isOpen,
  onClick,
  onClose,
  customDropdownId,
}) => {
  const dropdownId = customDropdownId || 'dropdown';
  const childrenRef = useRef();
  const [childrenSize, setChildrenSize] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleOnResize = () => {
    setChildrenSize({
      width: childrenRef.current.offsetWidth,
      height: childrenRef.current.offsetHeight,
    });
    setPosition({
      top: childrenRef.current.getBoundingClientRect().top,
      left: childrenRef.current.getBoundingClientRect().left,
    });
  };

  const handleOnClick = useCallback(
    event => {
      const _dropdownId = findAttributeInEvent(event, 'data-dropdown-id');
      if (!_dropdownId && dropdownId !== _dropdownId) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    handleOnResize();
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOnClick);
    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, [handleOnClick]);

  return (
    <>
      <div
        role="presentation"
        data-dropdown-id={dropdownId}
        ref={childrenRef}
        onClick={onClick}
      >
        {children}
      </div>
      {/* <Portal> */}
      <OverlayWrapper
        css={{
          top: position.top,
          left: position.left,
        }}
        isOpen={isOpen}
        childrenSize={childrenSize}
        gap={8}
      >
        {overlay}
      </OverlayWrapper>
      {/* </Portal> */}
    </>
  );
};

Dropdown.defaultProps = {
  isOpen: false,
  onClick: () => {},
  onClose: () => {},
};

export default Dropdown;
