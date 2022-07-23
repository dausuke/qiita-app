import {css} from '@emotion/react';
import {Box, Title, Text} from '../atoms';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const ROUTES = [
    {path: '/', name: 'ホーム'},
    {path: 'column', name: 'カラム'},
    // {path: 'browser', name: 'ブラウザ'},
  ];

  return (
    <header css={header}>
      <Box css={contaienr}>
        <Title css={logo} size="md">
          Qiita App
        </Title>
        <Box css={navi}>
          {ROUTES.map((route, index) => (
            <NavLink to={route.path} key={index}>
              {({isActive}) => (
                <Box css={[naviItem, isActive && border]} col>
                  <Text css={[naviText, isActive && activeText]}>
                    {route.name}
                  </Text>
                </Box>
              )}
            </NavLink>
          ))}
        </Box>
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
  align-items: flex-end;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
`;

const logo = css`
  color: #fff;
`;

const navi = css`
  column-gap: 40px;
  flex: 1;
  justify-content: center;
`;

const naviItem = css`
  justify-content: center;
  width: 80px;
`;

const naviText = css`
  text-align: center;
  color: #ffffff80;
  font-weight: bold;
  margin-bottom: 4px;
`;

const activeText = css`
  color: #fff;
`;

const border = css`
  :after {
    background-color: #fff;
    border-radius: 1.5px;
    content: '';
    display: block;
    height: 3px;
    width: 100%;
  }
`;
