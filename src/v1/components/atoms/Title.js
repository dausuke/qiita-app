import {css} from '@emotion/react';

const Title = props => {
  const fontSize =
    props.size === 'lg'
      ? 40
      : props.size === 'md'
      ? 32
      : props.size === 'sm'
      ? 24
      : 20;

  return (
    <span css={[text, props.style, {fontSize: fontSize}]}>
      {props.children}
    </span>
  );
};

export default Title;

const text = css`
  line-height: 145%;
  font-weight: 700;
`;
