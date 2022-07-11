import {css} from '@emotion/react';

const Text = props => {
  return (
    <p
      css={[
        text,
        props.style,
        {fontSize: props.fontSize ? props.fontSize : 16},
      ]}>
      {props.children}
    </p>
  );
};

export default Text;

const text = css`
  line-height: 130%;
  font-weight: 500;
`;
