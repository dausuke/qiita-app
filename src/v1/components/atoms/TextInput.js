import {css} from '@emotion/react';

const TextInput = props => {
  const width = props.width ? props.width : 250;

  return (
    <input
      css={[{width}, input]}
      type="text"
      {...props}
    />
  );
};

export default TextInput;

const input = css`
  padding: 4px 16px;
  margin-top: 4px;
  height: 40px;
  border: none;
  border-radius: 30px;
  :focus {
    outline: none;
  }
`;
