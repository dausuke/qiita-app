import {css} from '@emotion/react';

const Box = props => {
  const {col, wrap, ...styleProps} = props;
  const direction = col ? 'column' : 'row';
  const flexWrap = wrap ? 'wrap' : 'nowrap';

  return (
    <div
      css={[container, {flexDirection: direction, flexWrap: flexWrap}]}
      {...styleProps}>
      {props.children}
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Box;
