import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title, Text} from '../components/atoms/';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Tag from '../components/posts/Tag';

const PostDetail = () => {
  const {postId} = useParams();
  const [item, setItem] = useState();
  const [postBody, setPostBody] = useState('');

  const fetchPostDetail = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get(
        `https://qiita.com/api/v2/items/${postId}`,
        {headers},
      );

      const {rendered_body, ...data} = response.data;
      setItem(data);
      // const body = JSON.parse(rendered_body);
      setPostBody(rendered_body);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPostDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Box col>
      <Box col style={contaienr}>
        <Box col style={header}>
          <Title>{item?.title}</Title>
          <Box style={tagWrapper}>
            {item?.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </Box>
        </Box>
        {postBody}
      </Box>
    </Box>
  );
};

export default PostDetail;

const contaienr = css`
  margin-top: 120px;
  padding: 40px 24px;
  background-color: #ffffff;
`;

const header = css`
  margin-bottom: 40px;
`;

const tagWrapper = css`
  flex-wrap: wrap;
  margin-top: 16px;
`;
