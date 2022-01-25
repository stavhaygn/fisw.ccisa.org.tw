/** @jsx jsx */
import React, { useEffect, useRef, useState, memo } from 'react';
import { jsx } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';
import Row from './Row';
import BlankA from './BlankA';

const delay = 2500;

const Images = memo(({ images }) => (
  <>
    {images.map(image => (
      <GatsbyImage
        image={getImage(image)}
        alt={`slideshow-${uuidv4()}`}
        key={`slideshow-${uuidv4()}`}
      />
    ))}
  </>
));

const Slideshow = ({ images, link, dots = true, ...props }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
          ),
        delay,
      );
    });
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div tw="max-w-screen-md overflow-hidden" {...props}>
      <div
        tw="whitespace-nowrap duration-700"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <BlankA href={link}>
          <Images images={images} />
        </BlankA>
      </div>
      {dots && (
        <Row tw="mt-4 flex flex-row justify-center space-x-2">
          {images.map((_, idx) => (
            <div
              css={[
                tw`h-3 w-3 rounded-full cursor-pointer bg-gray-200`,
                index === idx && tw`bg-secondary`,
              ]}
              onClick={() => {
                setIndex(idx);
              }}
              key={`slideshow-dot-${uuidv4()}`}
            />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Slideshow;
