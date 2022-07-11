import {useState} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from './atoms';

const Header = (props) => {
  const [value, setValue] = useState('');

  const handelValueCange = text => {
    setValue(text);
  };

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.onSubmit(value);
    }
  };

  return (
    <header css={header}>
      <Box style={contaienr}>
        <Title style={logo} size="md">
          Qiita App
        </Title>
        <input
          css={input}
          type="text"
          value={value}
          placeholder="記事を検索"
          onChange={event => handelValueCange(event.target.value)}
          onKeyPress={onEnterPress}
        />
      </Box>
    </header>
  );
};

export default Header;

const header = css`
  width: 100vw;
  background-color: #55c500;
  position: fixed;
  left: 0;
`;

const contaienr = css`
  column-gap: 56px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;

const logo = css`
  color: #fff;
`;

const input = css`
  padding: 4px 16px;
  margin-top: 4px;
  height: 40px;
  width: 250px;
  border: none;
  border-radius: 30px;
  &:focus{
    outline: none;
  }
`;
