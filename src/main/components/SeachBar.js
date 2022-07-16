import {useState} from 'react';
import {css} from '@emotion/react';

const SearchBar = (props) => {
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
    <input
      css={input}
      type="text"
      value={value}
      placeholder="記事を検索"
      onChange={event => handelValueCange(event.target.value)}
      onKeyPress={onEnterPress}
    />
  );
};

export default SearchBar;

const input = css`
  padding: 4px 16px;
  margin-top: 4px;
  height: 40px;
  width: 250px;
  border: none;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;
