import {css} from '@emotion/react';

const Select = props => {
  const width = props.width ? props.width : 100;
  const {options, ...selectProps} = props;

  return (
    <div css={[{width}, contaienr]}>
      <select css={selectBox} {...selectProps}>
        {options.map((val, index) => (
          <option key={index}>{val.key}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

const contaienr = css`
  position: relative;
  width: 100px;
  :after {
    content: '';
    position: absolute;
    right: 10px;
    top: 18px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #d9d9d9;
    border-left: 2px solid #d9d9d9;
    transform: translateY(-50%) rotate(-135deg);
    font-size: 20px;
    pointer-events: none;
  }
`;

const selectBox = css`
  width: 100%;
  font-size: 14px;
  height: 42px;
  padding: 0 16px;
  background-color: #ffffff;
  border-color: #d9d9d9;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :focus {
    outline: none;
  }
`;
