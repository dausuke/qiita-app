import {useState} from 'react';
import {css} from '@emotion/react';
import {Box, Select, TextInput} from './atoms';

const SearchBar = props => {
  const SELECT_VALUES = [
    {key: '新着順', value: '新着順'},
    {key: '人気順', value: '人気順'},
  ];
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');

  const handelValueCange = text => {
    setInputValue(text);
  };

  const handelSelectChange = value => {
    setSelected(value);
    props.onSort(value);
  };

  const onEnterPress = e => {
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
        onKeyPress={onEnterPress}
      />
      <Select
        options={SELECT_VALUES}
        value={selected}
        onChange={event => handelSelectChange(event.target.value)}
      />
    </Box>
  );
};

export default SearchBar;

const contaienr = css`
  column-gap: 16px;
  align-items: center;
`;
