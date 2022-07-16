import {css} from '@emotion/react';

const Button = props => {
  return (
    <button disabled={props.isDisabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;