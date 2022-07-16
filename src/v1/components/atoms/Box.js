import {css} from '@emotion/react';

const Box = props => {
  const direction = props.col ? 'column' : 'row';
  const wrap = props.wrap ? 'wrap' : 'nowrap';

  return (
    <div
      css={[
        container,
        props.style,
        {flexDirection: direction, flexWrap: wrap},
      ]}>
      {props.children}
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Box;
