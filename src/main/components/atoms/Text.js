import {css} from '@emotion/react';

const Text = props => {
  const {fontSize, ...styleProps} = props;
  return (
    <p css={[text, {fontSize: fontSize ? fontSize : 16}]} {...styleProps}>
      {props.children}
    </p>
  );
};

export default Text;

const text = css`
  line-height: 130%;
  font-weight: 500;
`;
