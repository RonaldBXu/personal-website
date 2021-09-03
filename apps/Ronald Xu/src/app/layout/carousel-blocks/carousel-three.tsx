import React from 'react';
import { CarouselThreeProps } from './carousel-blocks.model';
import { cardStyle, pStyle, titleStyle } from './constants';

const CarouselThree: React.FC<CarouselThreeProps> = ({ dark }) => {
  return (
    <div
      className="rounded"
      style={{
        ...cardStyle,
        textAlign: 'center',
      }}
    >
      <h3 style={titleStyle}>This Website</h3>
      <p
        style={{
          marginTop: -20,
          color: '#fff',
        }}
      >
        I made this website to display some of my web development skills and
        practice a little!
      </p>

      {dark ? (
        <p style={{ marginTop: 200 }}>Wow, you found the Easter Egg already?</p>
      ) : (
        <>
          <p style={{ marginTop: 200 }}>Have you found the Easter Egg?</p>{' '}
          <p>
            hiNt: sometimes it mAy be interesting to try clicking on soME
            certain text.
          </p>
        </>
      )}
    </div>
  );
};

export { CarouselThree };
