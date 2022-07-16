import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms';
import axios from 'axios';
import PostItem from '../components/posts/PostItem';

const data = {
  coediting: false,
  comments_count: 0,
  created_at: '2022-07-15T19:42:32+09:00',
  group: null,
  id: 'a6c9a7508fac421b077f',
  likes_count: 0,
  page_views_count: null,
  private: false,
  reactions_count: 0,
  tags: [
    {
      name: 'Excel',
    },
    {
      name: '条件付き書式',
    },
  ],
  team_membership: null,
  title:
    'Excelで、テーブルとして書式設定したくないけど１行おきに色を付けたい場合の条件付き書式',
  updated_at: '2022-07-15T19:42:32+09:00',
  url: 'https://qiita.com/kameshika/items/a6c9a7508fac421b077f',
};

const Home = () => {
  const [posts, setPosts] = useState(Array(20).fill(data));

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
    // fetchPosts();
  }, []);

  return (
    <Box col>
      <Box style={contaienr} col>
        <Title size="sm">記事一覧</Title>
        <Box style={postWrapper} col>
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
