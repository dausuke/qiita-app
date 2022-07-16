import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms';
import axios from 'axios';
import PostItem from '../components/posts/PostItem';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async query => {
    try {
      const params = {
        page: '1',
        per_page: '25',
        query,
      };
      const headers = {
          Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get('https://qiita.com/api/v2/items', {
        headers,
        params,
      });
      console.log(response);
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box col>
      <Box css={contaienr} col>
        <Title size="sm">記事一覧</Title>
        <Box css={postWrapper} col>
          {posts.map((post, index) => (
            <PostItem post={post} key={index} margin={32} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const contaienr = css`
  padding-top: 120px;
`;

const postWrapper = css`
  margin-top: 40px;
`;
