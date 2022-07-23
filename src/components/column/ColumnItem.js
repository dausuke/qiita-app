/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box} from '../atoms';
import SearchBar from '../common/SeachBar';
import PostItem from '../posts/PostItem';
import axios from 'axios';
import MinusIcon from '../../assets/icon/minus.svg';
import Pagination from '../common/Pagination';

const ColumnItem = props => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const params = {
        per_page: '20',
        page,
        query: props.query,
      };
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get('https://qiita.com/api/v2/items', {
        headers,
        params,
      });

      setPosts([...posts, ...response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearch = value => {
    props.onSearch(props.id, value);
  };

  useEffect(() => {
    fetchPosts();
  }, [page, props.query]);

  return (
    <Box css={container} col>
      <Box css={searchWrap}>
        <SearchBar
          onEnterPress={onSearch}
          inputStyle={input}
          value={props.query}
        />
        <img
          src={MinusIcon}
          onClick={() => props.onIconClick(props.id)}
          alt=""
        />
      </Box>
      <Box col css={scroll}>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} margin={32} />
        ))}
        <Pagination
          currentPage={page}
          isInfinite
          onNext={() => setPage(page => page + 1)}
          onPrevious={() => setPage(page => page - 1)}
          onPagePress={page => setPage(page)}
        />
      </Box>
    </Box>
  );
};

export default ColumnItem;

const container = css`
  flex: 1;
  padding: 16px;
  align-items: center;
  width: calc(1080px / 3 - 64px / 3);
`;

const searchWrap = css`
  width: 100%;
  justify-content: space-between;
`;

const scroll = css`
  margin-top: 32px;
  height: 900px;
  overflow: auto;
`;

const input = css`
  width: 240px;
`;
