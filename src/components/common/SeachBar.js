import {useState} from 'react';
import {css} from '@emotion/react';
import {Box, TextInput} from '../atoms';

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('');

  const handelValueCange = text => {
    setInputValue(text);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.onEnterPress(inputValue);
    }
  };

  return (
    <Box css={contaienr}>
      <TextInput
        placeholder="記事を検索"
        value={inputValue}
        onChange={event => handelValueCange(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Box>
  );
};

export default SearchBar;

const contaienr = css`
  column-gap: 16px;
  align-items: center;
`;
