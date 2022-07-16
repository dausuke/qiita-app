import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms/';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Tag from '../components/posts/Tag';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/posts/CodeBlock';
import {markdownStyle} from '../assets/markdown';

const PostDetail = () => {
  const {postId} = useParams();
  const [item, setItem] = useState();

  const fetchPostDetail = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get(
        `https://qiita.com/api/v2/items/${postId}`,
        {headers},
      );

      setItem(response.data);
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
      <Box col css={contaienr}>
        <Box col css={header}>
          <Title size="lg">{item?.title}</Title>
          <a href={item?.url} target="_blank" rel="noopener noreferrer">
            {item?.url}
          </a>
          <Box css={tagWrapper}>
            {item?.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </Box>
        </Box>
        <div css={markdownStyle}>
          <ReactMarkdown
            components={{code: CodeBlock}}
            className="markdown-style">
            {item?.body}
          </ReactMarkdown>
        </div>
      </Box>
    </Box>
  );
};

export default PostDetail;

const contaienr = css`
  margin: 120px 0 80px;
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
