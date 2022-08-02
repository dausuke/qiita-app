import {useState, useEffect} from 'react';

const BREAK_POINTS = [
  {
    id: 'small',
    breakpoint: 1280,
  },
  {
    id: 'tablet',
    breakpoint: 960,
  },
  {
    id: 'sp',
    breakpoint: 540,
  },
];

export const mq = BREAK_POINTS.reduce((acc, {id, breakpoint}) => {
  return {
    ...acc,
    [id]: `@media (max-width: ${breakpoint}px)`,
  };
});

export const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const {innerWidth} = window;
    return innerWidth;
  };

  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowDimensions;
};
