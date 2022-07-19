import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms';
import axios from 'axios';
import PostItem from '../components/posts/PostItem';
import SearchBar from '../components/common/SeachBar';
import Pagination from '../components/common/Pagination';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();

  const fetchPosts = async () => {
    try {
      const params = {
        per_page: '20',
        page,
        query,
      };
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get('https://qiita.com/api/v2/items', {
        headers,
        params,
      });

      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return (
    <Box col>
      <Box css={contaienr} col>
        <Box css={header}>
          <Title size="sm">記事一覧</Title>
          <Box css={searchWrap}>
            <SearchBar onEnterPress={value => setQuery(value)} />
            <Pagination
              currentPage={page}
              onNext={() => setPage(page => page + 1)}
              onPrevious={() => setPage(page => page - 1)}
              onPagePress={page => setPage(page)}
            />
          </Box>
        </Box>
        <Box css={postWrapper} col>
          {posts.map((post, index) => (
            <PostItem post={post} key={index} margin={32} />
          ))}
        </Box>
        <Box css={footer}>
          <Pagination
            currentPage={page}
            onNext={() => setPage(page => page + 1)}
            onPrevious={() => setPage(page => page - 1)}
            onPagePress={page => setPage(page)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const contaienr = css`
  padding: 120px 0 80px;
`;

const header = css`
  column-gap: 40px;
  align-items: center;
`;

const searchWrap = css`
  flex: 1;
  justify-content: space-between;
`;

const postWrapper = css`
  margin-top: 40px;
`;

const footer = css`
  justify-content: center;
`;
