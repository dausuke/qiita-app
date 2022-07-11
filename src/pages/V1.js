import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms/';
import axios from 'axios';
import PostItem from '../components/posts/PostItem';
import Header from '../components/Header';

const V1 = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async query => {
    try {
      const params = {
        page: '1',
        per_page: '25',
        query,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
        },
      };

      const response = await axios.get(
        'https://qiita.com/api/v2/items',
        {params},
        config,
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // fetchPosts();
  }, []);

  return (
    <Box col>
      <Header onSubmit={fetchPosts} />
      <Box style={contaienr} col>
        <Title size="sm">記事一覧</Title>
        <Box style={postWrapper} col>
          {posts.map(post => (
            <PostItem post={post} key={post.id} margin={32} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default V1;

const contaienr = css`
  padding-top: 120px;
`;

const postWrapper = css`
  margin-top: 40px;
`;
