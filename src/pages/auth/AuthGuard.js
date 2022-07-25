import {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import {Box, Title, Text} from '../../components/atoms';
import {isLoggedin} from '../../firebase';
import {Link} from 'react-router-dom';

const AuthGuard = props => {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    isLoggedin().then(val => setIsLogin(!!val));
  }, []);

  return isLogin === false ? (
    <Box css={contaienr} col>
      <Box col>
        <Title css={title} size="md">
          ログインしていません
        </Title>
        <Text>ログインするか、新規登録を完了してください</Text>
      </Box>
      <Link to="/auth" css={linkText}>
        認証ページへ
      </Link>
    </Box>
  ) : (
    <>{props.component}</>
  );
};

export default AuthGuard;

const contaienr = css`
  justify-content: center;
  align-items: center;
  padding: 120px 0 80px;
`;

const title = css`
  margin-bottom: 24px;
`;

const linkText = css`
  margin-top: 80px;
  text-decoration: underline;
  color: #3881f7;
  font-weight: 700;
`;
