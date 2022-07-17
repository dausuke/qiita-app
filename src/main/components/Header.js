import {css} from '@emotion/react';
import {Box, Title} from './atoms';

const Header = props => {
  return (
    <header css={header}>
      <Box css={contaienr}>
        <Title css={logo} size="md">
          Qiita App
        </Title>
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
  z-index: 9999;
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
